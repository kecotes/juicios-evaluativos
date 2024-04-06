import { DataTypes } from "sequelize";
import db from "../database/connection";
import Usuario from "./usuario";

const UsuarioToken = db.define(
  "UsuarioToken",
  {
    idUsuarioToken: {
      type: DataTypes.INTEGER,
      field: "id_usuario_token",
      primaryKey: true,
      autoIncrement: true,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      field: "usuario_id",
      references: {
        model: Usuario,
        key: "idUsuario",
      },
    },
    token: { type: DataTypes.TEXT },
  },
  {
    tableName: "usuario_token",
  }
);

Usuario.hasMany(UsuarioToken, {
  foreignKey: "usuarioId",
  as: "usuarioToken",
});

UsuarioToken.belongsTo(Usuario, {
  foreignKey: "usuarioId",
});

export default UsuarioToken;
