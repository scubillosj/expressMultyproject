import pickingService from '../services/pickingService.js';
import { Op } from "sequelize";

export const createPicking = async (req, res) => {
  try {
    const picking = await pickingService.createPicking(req.body);
    res.status(201).json(picking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPicking = async (req, res) => {
  try {
    const { date_start, date_end, origen } = req.query;

    const filtros = {};

    if (date_start && date_end) {
      filtros.fechaFactura = {
        [Op.between]: [
          new Date(date_start),
          new Date(date_end + "T23:59:59"),
        ]
      };
    }

    if (origen) {
      filtros.origen = origen;
    }

    // Llamamos al service
    const picking = await pickingService.getPicking(filtros);

    res.json(picking);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getPickingById = async (req, res) => {
  try {
    const picking = await pickingService.getPickingById(req.params.id);
    if (!picking) return res.status(404).json({ message: 'Línea de picking no encontrada' });
    res.json(picking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePicking = async (req, res) => {
  try {
    const picking = await pickingService.updatePicking(req.params.id, req.body);
    res.json(picking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePicking = async (req, res) => {
  try {
    await pickingService.deletePicking(req.params.id);
    res.json({ message: 'Línea de picking eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const uploadPicking = async (req, res) => {
  try {
    const resultado = await pickingService.uploadPicking(req.body);
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ 
      status: "error",
      detalle: error.message 
    });
  }
};
