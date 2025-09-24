import deniedProductService from '../services/deniedProductService.js';

const createDeniedProduct = async (req, res) => {
  try {
    const deniedProduct = await deniedProductService.createDeniedProduct(req.body);
    res.status(201).json(deniedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDeniedProducts = async (req, res) => {
  try {
    const deniedProducts = await deniedProductService.getDeniedProducts();
    res.json(deniedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDeniedProductById = async (req, res) => {
  try {
    const deniedProduct = await deniedProductService.getDeniedProductById(req.params.id);
    if (!deniedProduct) {
      return res.status(404).json({ message: 'DeniedProduct no encontrado' });
    }
    res.json(deniedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDeniedProduct = async (req, res) => {
  try {
    const updated = await deniedProductService.updateDeniedProduct(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDeniedProduct = async (req, res) => {
  try {
    await deniedProductService.deleteDeniedProduct(req.params.id);
    res.json({ message: 'DeniedProduct eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createDeniedProduct,
  getDeniedProducts,
  getDeniedProductById,
  updateDeniedProduct,
  deleteDeniedProduct
};
