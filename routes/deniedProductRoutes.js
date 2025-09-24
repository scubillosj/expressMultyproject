import express from 'express';
import deniedProductController from '../controllers/deniedProductController.js';

const router = express.Router();

router.post('/', deniedProductController.createDeniedProduct);
router.get('/', deniedProductController.getDeniedProducts);
router.get('/:id', deniedProductController.getDeniedProductById);
router.put('/:id', deniedProductController.updateDeniedProduct);
router.delete('/:id', deniedProductController.deleteDeniedProduct);

export default router;