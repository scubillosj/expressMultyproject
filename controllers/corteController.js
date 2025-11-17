import corteService from "../services/corteService.js";

export const createCorte = async (req, res) => {
  try {
    const corte = await corteService.createCorte(req.body);
    res.status(201).json(corte);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCortes = async (req, res) => {
  try {
    const cortes = await corteService.getCortes();
    res.json(cortes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCorteById = async (req, res) => {
  try {
    const corte = await corteService.getCorteById(req.params.id);
    if (!corte) {
      return res.status(404).json({ message: "Corte no encontrado" });
    }
    res.json(corte);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCorte = async (req, res) => {
  try {
    const corte = await corteService.updateCorte(req.params.id, req.body);
    res.json(corte);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCorte = async (req, res) => {
  try {
    await corteService.deleteCorte(req.params.id);
    res.json({ message: "Corte eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
