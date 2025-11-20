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

/**
 * @swagger
 * /api/corte:
 *   post:
 *     summary: Crea un nuevo registro de Corte Logístico.
 *     tags:
 *       - Cortes Logísticos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fecha
 *               - nombre
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2025-11-20"
 *               nombre:
 *                 type: string
 *                 example: "CORTE_MAÑANA_2011"
 *     responses:
 *       201:
 *         description: Corte creado exitosamente.
 *       400:
 *         description: Error de validación.
 *       401:
 *         description: No autorizado.
 */
router.post("/", auth, createCorte);

/**
 * @swagger
 * /api/corte:
 *   get:
 *     summary: Obtiene una lista de todos los Cortes Logísticos.
 *     tags:
 *       - Cortes Logísticos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de cortes obtenida exitosamente.
 *       401:
 *         description: No autorizado.
 */
router.get("/", auth, getCortes);

/**
 * @swagger
 * /api/corte/{id}:
 *   get:
 *     summary: Obtiene un Corte Logístico por su ID.
 *     tags:
 *       - Cortes Logísticos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del corte
 *     responses:
 *       200:
 *         description: Corte encontrado.
 *       404:
 *         description: Corte no encontrado.
 *       401:
 *         description: No autorizado.
 */
router.get("/:id", auth, getCorteById);

/**
 * @swagger
 * /api/corte/{id}:
 *   put:
 *     summary: Actualiza un Corte Logístico existente.
 *     tags:
 *       - Cortes Logísticos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del corte
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2025-11-20"
 *               nombre:
 *                 type: string
 *                 example: "CORTE_NOCHE_2011"
 *     responses:
 *       200:
 *         description: Corte actualizado.
 *       400:
 *         description: Error de validación.
 *       404:
 *         description: Corte no encontrado.
 *       401:
 *         description: No autorizado.
 */
router.put("/:id", auth, updateCorte);

/**
 * @swagger
 * /api/corte/{id}:
 *   delete:
 *     summary: Elimina un Corte Logístico por su ID.
 *     tags:
 *       - Cortes Logísticos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del corte
 *     responses:
 *       204:
 *         description: Corte eliminado.
 *       404:
 *         description: Corte no encontrado.
 *       401:
 *         description: No autorizado.
 */
router.delete("/:id", auth, deleteCorte);

export default router;
