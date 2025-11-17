import { Router } from 'express';
import {
  createPicking,
  getPicking,
  getPickingById,
  updatePicking,
  deletePicking,
  uploadPicking
} from '../controllers/pickingController.js';

const router = Router();

router.post('/', createPicking);
router.get('/', getPicking);
router.get('/:id', getPickingById);
router.put('/:id', updatePicking);
router.delete('/:id', deletePicking);
router.post('/upload', uploadPicking);

export default router;
