import origenService from '../services/origenService.js';

const createOrigen = async (req, res) => {
  try {
    const origen = await origenService.createOrigen(req.body);
    res.status(201).json(origen);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getOrigenes = async (req, res) => {
  try {
    const origenes = await origenService.getOrigenes();
    res.json(origenes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrigenById = async (req, res) => {
  try {
    const origen = await origenService.getOrigenById(req.params.id);
    if (!origen) {
      return res.status(404).json({ message: 'Origen no encontrado' });
    }
    res.json(origen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrigen = async (req, res) => {
  try {
    const origen = await origenService.updateOrigen(req.params.id, req.body);
    res.json(origen);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteOrigen = async (req, res) => {
  try {
    await origenService.deleteOrigen(req.params.id);
    res.json({ message: 'Origen eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createOrigen,
  getOrigenes,
  getOrigenById,
  updateOrigen,
  deleteOrigen,
};
