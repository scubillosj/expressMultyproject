import express from 'express';
import pickingController from '../controllers/pickingController.js';

const router = express.Router();

router.post('/', pickingController.createPicking);
router.get('/', pickingController.getPicking);
router.get('/:id', pickingController.getPickingById);
router.put('/:id', pickingController.updatePicking);
router.delete('/:id', pickingController.deletePicking);

export default router;
