import { DataTypes } from "sequelize";

import dataBase from "../database/connection";

const Usuario = dataBase.define(
  "Usuario",
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_usuario",
    },
    nombre: {
      type: DataTypes.TEXT,
    },
    nombreUsuario: {
      type: DataTypes.TEXT,
      field: "nombre_usuario",
    },
    email: {
      type: DataTypes.TEXT,
    },
    contrasena: {
      type: DataTypes.TEXT,
    },
  },
  { tableName: "usuario" }
);

export default Usuario;
