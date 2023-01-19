// Importamos la libreria LLamada Router de express.

import { Router } from "express";
import { getAllOrdenes } from "../controllers/aenc.controller.js"; 

const router = Router();

router.get("/ordenes", getAllOrdenes);

export default router;