import { Router } from "express";
import { validarJWT } from "../middlewares/validar-jwt";
import { actividadListar } from "../controllers/actividad";

const router = Router();

router.get("/", [validarJWT], actividadListar);

export default router;
