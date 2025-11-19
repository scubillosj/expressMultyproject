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

router.post('/', auth, createPicking);
router.get('/', auth, getPicking);
router.get('/:id', auth, getPickingById);
router.put('/:id', auth,updatePicking);
router.delete('/:id', auth, deletePicking);
router.post('/upload', auth, uploadPicking);

export default router;
