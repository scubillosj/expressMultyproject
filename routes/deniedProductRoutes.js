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

/**
 * @swagger
 * tags:
 *   - name: ProductosNegados
 *     description: Gestión de productos negados
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ProductoNegado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         codigo:
 *           type: string
 *         descripcion:
 *           type: string
 *         motivo:
 *           type: string
 *         fechaRegistro:
 *           type: string
 *           format: date
 *       required:
 *         - codigo
 *         - descripcion
 *         - motivo
 *
 *     ProductoNegadoInput:
 *       type: object
 *       properties:
 *         codigo:
 *           type: string
 *         descripcion:
 *           type: string
 *         motivo:
 *           type: string
 *       required:
 *         - codigo
 *         - descripcion
 *         - motivo
 */

/**
 * @swagger
 * /denied-products:
 *   get:
 *     summary: Lista todos los productos negados
 *     tags: [ProductosNegados]
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
 *                 $ref: '#/components/schemas/ProductoNegado'
 */
router.get("/", auth, listarProductoNegado);

/**
 * @swagger
 * /denied-products:
 *   post:
 *     summary: Crea un nuevo producto negado
 *     tags: [ProductosNegados]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductoNegadoInput'
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductoNegado'
 */
router.post("/", auth, crearProductoNegado);

/**
 * @swagger
 * /denied-products/{id}:
 *   get:
 *     summary: Obtiene un producto negado por ID
 *     tags: [ProductosNegados]
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
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductoNegado'
 *       404:
 *         description: Producto no encontrado
 */
router.get("/:id", auth, obtenerProductoNegado);

/**
 * @swagger
 * /denied-products/{id}:
 *   patch:
 *     summary: Actualiza parcialmente un producto negado
 *     tags: [ProductosNegados]
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
 *             $ref: '#/components/schemas/ProductoNegadoInput'
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente
 */
router.patch("/:id", auth, actualizarProductoNegado);

/**
 * @swagger
 * /denied-products/{id}:
 *   delete:
 *     summary: Elimina un producto negado
 *     tags: [ProductosNegados]
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
 *         description: Producto eliminado correctamente
 */
router.delete("/:id", auth, eliminarProductoNegado);

/**
 * @swagger
 * /denied-products/upload:
 *   post:
 *     summary: Cargar archivo Excel con productos negados
 *     tags: [ProductosNegados]
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
router.post("/upload", auth, uploadExcelProductoNegado);

export default router;
