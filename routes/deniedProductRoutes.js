import { Router } from "express";
import { auth } from "../middlewares/authMiddleware.js";
import {
  listarProductoNegado,
  crearProductoNegado,
  obtenerProductoNegado,
  actualizarProductoNegado,
  eliminarProductoNegado,
  uploadExcelProductoNegado
} from "../controllers/deniedProductController.js";

const router = Router();

router.get("/", auth, listarProductoNegado);
router.post("/", auth, crearProductoNegado);
router.get("/:id", auth, obtenerProductoNegado);
router.patch("/:id", auth, actualizarProductoNegado);
router.delete("/:id", auth, eliminarProductoNegado);
router.post("/upload", auth, uploadExcelProductoNegado);


export default router;
