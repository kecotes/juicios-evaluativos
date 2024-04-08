import { Type } from "@sinclair/typebox";

export const AuthLoginSchema = Type.Object(
  {
    nombreUsuario: Type.String(),
    contrasena: Type.String(),
  },
  {
    additionalProperties: false,
  }
);
