import { Picking } from '../models/index.js'; // La mejor práctica es importar el objeto `db`

const createPicking = async (data) => {
  return await Picking.create(data);
};

const getPickings = async () => {
  return await Picking.findAll();
};

const getPickingById = async (id) => {
  return await Picking.findByPk(id);
};

const updatePicking = async (id, data) => {
  const picking = await Picking.findByPk(id);
  if (!picking) throw new Error('Picking no encontrado');
  return await picking.update(data);
};

const deletePicking = async (id) => {
  const picking = await Picking.findByPk(id);
  if (!picking) throw new Error('Picking no encontrado');
  return await picking.destroy();
};

export default { createPicking, getPickings, getPickingById, updatePicking, deletePicking };