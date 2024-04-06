import jwt from "jsonwebtoken";
import UsuarioToken from "../models/usuario-token";

export const generarJWT = (id: number) => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(
      payload,
      `${process.env.SECRET_KEY}`,
      {
        expiresIn: "24h",
      },
      async (err, token) => {
        if (err) {
          console.error(err);
          reject("No se pudo generar el token.");
        } else {
          const usuarioToken = UsuarioToken.build({
            usuarioId: id,
            token,
          });
          await usuarioToken.save();
          resolve(token);
        }
      }
    );
  });
};
