import express from 'express';
import origenController from '../controllers/origenController.js';

const router = express.Router();

router.post('/', origenController.createOrigen);
router.get('/', origenController.getOrigenes);
router.get('/:id', origenController.getOrigenById);
router.put('/:id', origenController.updateOrigen);
router.delete('/:id', origenController.deleteOrigen);

export default router;
