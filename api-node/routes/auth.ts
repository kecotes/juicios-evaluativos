import { Router } from "express";
import { validarJSON } from "../middlewares/validar-json";
import { AuthLoginSchema } from "../schemas/auth";
import { login } from "./../controllers/auth";

const router = Router();

router.post("/", validarJSON(AuthLoginSchema), login);

export default router;
