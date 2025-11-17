import { Router } from "express";
import {
  createCorte,
  getCortes,
  getCorteById,
  updateCorte,
  deleteCorte,
} from "../controllers/corteController.js";

const router = Router();

router.post("/", createCorte);
router.get("/", getCortes);
router.get("/:id", getCorteById);
router.put("/:id", updateCorte);
router.delete("/:id", deleteCorte);

export default router;
