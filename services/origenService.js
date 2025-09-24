import { Origen } from '../models/index.js';

const createOrigen = async (data) => {
  return await Origen.create(data);
};

const getOrigenes = async () => {
  return await Origen.findAll();
};

const getOrigenById = async (id) => {
  return await Origen.findByPk(id);
};

const updateOrigen = async (id, data) => {
  const origen = await Origen.findByPk(id);
  if (!origen) throw new Error('Origen no encontrado');
  return await origen.update(data);
};

const deleteOrigen = async (id) => {
  const origen = await Origen.findByPk(id);
  if (!origen) throw new Error('Origen no encontrado');
  await origen.destroy();
  return;
};

export default {
  createOrigen,
  getOrigenes,
  getOrigenById,
  updateOrigen,
  deleteOrigen,
};
