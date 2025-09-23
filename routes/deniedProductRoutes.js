// routes/users.js
import { Router } from 'express';
import { DeniedProduct } from '../models/index.js'; // Importa el objeto db

const router = Router();
// Endpoint para crear un nuevo usuario
router.post('/diniedProduct', async (req, res) => {
  try {
    const newdiniedProduct = await DeniedProduct.create(req.body);
    res.status(201).json(newdiniedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener todos los usuarios
router.get('/diniedProduct', async (req, res) => {
  try {
    const listdiniedProduct = await DeniedProduct.findAll();
    res.status(200).json(listdiniedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;