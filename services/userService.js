import { User } from '../models/index.js';

const createUser = async (data) => {
  return await User.create(data);
};

const getUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('Usuario no encontrado');
  return await user.update(data);
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('Usuario no encontrado');
  return await user.destroy();
};

export default { createUser, getUsers, getUserById, updateUser, deleteUser };
