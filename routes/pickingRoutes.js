// routes/users.js
import { Router } from 'express';
import db from '../models/index.js'; // Importa el objeto db

const router = Router();



// Endpoint para crear un nuevo usuario
router.post('/picking', async (req, res) => {
  try {
    const newpicking = await db.Picking.create(req.body);
    res.status(201).json(newpicking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener todos los usuarios
router.get('/picking', async (req, res) => {
  try {
    const listpicking = await db.picking.findAll();
    res.status(200).json(listpicking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;