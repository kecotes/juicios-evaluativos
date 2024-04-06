import { DataTypes } from "sequelize";
import db from "../database/connection";
import Actividad from "./actividad";

const ActividadItem = db.define(
  "ActividadItem",
  {
    idActividadItem: {
      type: DataTypes.INTEGER,
      field: "id_actividad_item",
      primaryKey: true,
      autoIncrement: true,
    },
    actividadId: {
      type: DataTypes.INTEGER,
      field: "actividad_id",
      references: {
        model: Actividad,
        key: "idActividad",
      },
    },
    nombre: { type: DataTypes.TEXT },
  },
  {
    tableName: "actividad_item",
  }
);

Actividad.hasMany(ActividadItem, {
  foreignKey: "actividadId",
  as: "actividadItem",
});

ActividadItem.belongsTo(Actividad, {
  foreignKey: "actividadId",
});

export default ActividadItem;
