import { Request, Response } from "express";
import Usuario from "../models/usuario";
import Actividad from "../models/actividad";
import ActividadItem from "../models/actividad-item";

export const actividadListar = async (req: Request, res: Response) => {
  try {
    const { pagina = 1, usuario } = req.query;
    const actividades = await Actividad.findAll({
      attributes: [
        ["id_actividad", "id"],
        "fecha",
        ["tiempo_inicio", "tiempoInicio"],
        ["tiempo_final", "tiempoFinal"],
      ],
      include: [
        {
          model: Usuario,
          required: true,
          attributes: [],
          where: {
            idUsuario: usuario,
          },
        },
        {
          model: ActividadItem,
          as: "actividadItem",
          attributes: ["nombre"],
        },
      ],
      order: [["id_actividad", "DESC"]],
      offset: (+pagina - 1) * 10,
      limit: 10,
    });
    return res.json(actividades);
  } catch (error) {
    console.log("🚀 ~ actividadListar ~ error:", error);
    return res
      .status(500)
      .json({ message: "Comuniquese con soporte técnico." });
  }
};
