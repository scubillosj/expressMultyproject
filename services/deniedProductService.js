import { DeniedProduct } from '../models/index.js';

const createDeniedProduct = async (data) => {
  return await DeniedProduct.create(data);
};

const getDeniedProducts = async () => {
  return await DeniedProduct.findAll();
};

const getDeniedProductById = async (id) => {
  return await DeniedProduct.findByPk(id);
};

const updateDeniedProduct = async (id, data) => {
  const deniedProduct = await DeniedProduct.findByPk(id);
  if (!deniedProduct) {
    throw new Error('DeniedProduct no encontrado');
  }
  return await deniedProduct.update(data);
};

const deleteDeniedProduct = async (id) => {
  const deniedProduct = await DeniedProduct.findByPk(id);
  if (!deniedProduct) {
    throw new Error('DeniedProduct no encontrado');
  }
  await deniedProduct.destroy();
  return; // o podrías devolver algo si quieres
};

export default {
  createDeniedProduct,
  getDeniedProducts,
  getDeniedProductById,
  updateDeniedProduct,
  deleteDeniedProduct
};
