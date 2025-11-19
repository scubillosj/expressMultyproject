import { Router } from "express";
import { auth } from "../middlewares/authMiddleware.js";
import {
  createCorte,
  getCortes,
  getCorteById,
  updateCorte,
  deleteCorte,
} from "../controllers/corteController.js";

const router = Router();

router.post("/",auth, createCorte);
router.get("/", auth ,getCortes);
router.get("/:id", auth , getCorteById);
router.put("/:id", auth , updateCorte);
router.delete("/:id", auth , deleteCorte);

export default router;
