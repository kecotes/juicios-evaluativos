import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const usuarioListar = async (req: Request, res: Response) => {
  try {
    const { pagina = 1 } = req.query;
    const usuarios = await Usuario.findAll({
      attributes: [["id_usuario", "id"], "nombre", "email"],
      order: [["id", "DESC"]],
      offset: (+pagina - 1) * 10,
      limit: 10,
    });
    return res.json(usuarios);
  } catch (error) {
    console.log("🚀 ~ usuarioListar ~ error:", error);
    return res
      .status(500)
      .json({ message: "Comuniquese con soporte técnico." });
  }
};
