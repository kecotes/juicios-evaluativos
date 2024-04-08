import { DataTypes } from "sequelize";

import dataBase from "../database/connection";
import Usuario from "./usuario";

const Actividad = dataBase.define(
  "Actividad",
  {
    idActividad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_actividad",
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      field: "usuario_id",
      references: {
        model: Usuario,
        key: "idUsuario",
      },
    },
    fecha: {
      type: DataTypes.DATEONLY,
    },
    tiempoInicio: {
      type: DataTypes.TIME,
      field: "tiempo_inicio",
    },
    tiempoFinal: {
      type: DataTypes.TIME,
      field: "tiempo_final",
    },
  },
  { tableName: "actividad" }
);

Usuario.hasMany(Actividad, {
  foreignKey: "usuarioId",
});

Actividad.belongsTo(Usuario, {
  foreignKey: "usuarioId",
});

export default Actividad;
