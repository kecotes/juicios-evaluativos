import { Router } from "express";
import { validarJWT } from "../middlewares/validar-jwt";
import { usuarioListar } from "../controllers/usuario";

const router = Router();

router.get("/", [validarJWT], usuarioListar);

export default router;
