// routes/users.js
import { Router } from 'express';
import db from '../models/index.js'; // Importa el objeto db

const router = Router();

// Endpoint para crear un nuevo usuario
router.post('/users', async (req, res) => {
  try {
    const newUser = await db.User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;