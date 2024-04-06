import { Request, Response } from "express";
import Usuario from "../models/usuario";
import md5 from "md5";
import { generarJWT } from "../helpers/generar-jwt";

export const login = async (req: Request, res: Response) => {
  const { nombreUsuario, contrasena } = req.body;
  try {
    const usuario: any = await Usuario.findOne({
      attributes: [["id_usuario", "id"], "nombre", "contrasena"],
      where: { nombreUsuario },
      raw: true,
      nest: true,
    });
    if (!usuario) {
      return res
        .status(422)
        .json({ message: "Identificación / Contraseña incorrecto. " });
    }
    const validPassword = md5(contrasena) == usuario.contrasena;
    if (!validPassword) {
      return res
        .status(422)
        .json({ message: "Identificacion / Contraseña incorrecto." });
    }
    const token = await generarJWT(usuario.id);
    return res.json({
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Comuniquese con soporte técnico." });
  }
};
