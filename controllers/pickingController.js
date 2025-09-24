import pickingService from '../services/pickingService.js';

const createPicking = async (req, res) => {
  try {
    const picking = await pickingService.createPicking(req.body);
    res.status(201).json(picking); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPicking = async (req, res) => {
  try {
    const picking = await pickingService.getPicking();
    res.json(picking); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPickingById = async (req, res) => {
  try {
    const picking = await pickingService.getPickingById(req.params.id);
    if (!picking) return res.status(404).json({ message: 'Línea de picking no encontrada' }); // <-- Corregido: 'user' y 'Usuario no encontrado'
    res.json(picking); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePicking = async (req, res) => {
  try {
    const picking = await pickingService.updatePicking(req.params.id, req.body);
    res.json(picking); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePicking = async (req, res) => {
  try {
    await pickingService.deletePicking(req.params.id);
    res.json({ message: 'Línea de picking eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { createPicking, getPicking, getPickingById, updatePicking, deletePicking };