import { Router } from 'express';
import { auth } from "../middlewares/authMiddleware.js";
import {
  createPicking,
  getPicking,
  getPickingById,
  updatePicking,
  deletePicking,
  uploadPicking
} from '../controllers/pickingController.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Picking
 *     description: Gestión de registros de picking
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Picking:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         numeroOrden:
 *           type: string
 *         producto:
 *           type: string
 *         cantidad:
 *           type: integer
 *         fechaRegistro:
 *           type: string
 *           format: date
 *       required:
 *         - numeroOrden
 *         - producto
 *         - cantidad
 *
 *     PickingInput:
 *       type: object
 *       properties:
 *         numeroOrden:
 *           type: string
 *         producto:
 *           type: string
 *         cantidad:
 *           type: integer
 *       required:
 *         - numeroOrden
 *         - producto
 *         - cantidad
 */

/**
 * @swagger
 * /picking:
 *   post:
 *     summary: Crea un registro de picking
 *     tags: [Picking]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PickingInput'
 *     responses:
 *       201:
 *         description: Picking creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Picking'
 */
router.post('/', auth, createPicking);

/**
 * @swagger
 * /picking:
 *   get:
 *     summary: Obtiene la lista de registros de picking
 *     tags: [Picking]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Picking'
 */
router.get('/', auth, getPicking);

/**
 * @swagger
 * /picking/{id}:
 *   get:
 *     summary: Obtiene un registro de picking por ID
 *     tags: [Picking]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Picking'
 *       404:
 *         description: Picking no encontrado
 */
router.get('/:id', auth, getPickingById);

/**
 * @swagger
 * /picking/{id}:
 *   put:
 *     summary: Actualiza un registro de picking
 *     tags: [Picking]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PickingInput'
 *     responses:
 *       200:
 *         description: Picking actualizado correctamente
 */
router.put('/:id', auth, updatePicking);

/**
 * @swagger
 * /picking/{id}:
 *   delete:
 *     summary: Elimina un registro de picking
 *     tags: [Picking]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Picking eliminado correctamente
 */
router.delete('/:id', auth, deletePicking);

/**
 * @swagger
 * /picking/upload:
 *   post:
 *     summary: Cargar archivo Excel con registros de picking
 *     tags: [Picking]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Archivo procesado exitosamente
 */
router.post('/upload', auth, uploadPicking);

export default router;
