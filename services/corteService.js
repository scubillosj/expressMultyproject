import { CortesLogistico } from "../models/index.js";

class corteService {
  async createCorte(data) {
    return await CortesLogistico.create(data);
  }

  async getCortes() {
    return await CortesLogistico.findAll({
      order: [["fecha", "DESC"]],
    });
  }

  async getCorteById(id) {
    return await CortesLogistico.findByPk(id);
  }

  async updateCorte(id, data) {
    const corte = await CortesLogistico.findByPk(id);
    if (!corte) throw new Error("Corte logístico no encontrado");

    await corte.update(data);
    return corte;
  }

  async deleteCorte(id) {
    const corte = await CortesLogistico.findByPk(id);
    if (!corte) throw new Error("Corte logístico no encontrado");

    await corte.destroy();
    return true;
  }
}

export default new corteService();
