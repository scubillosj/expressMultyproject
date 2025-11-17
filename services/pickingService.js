import PickingModel from '../models/pickingModel.js';

class PickingService {
    
    async createPicking(data) {
        return await PickingModel.create(data);
    }

    async getPicking() {
        return await PickingModel.findAll();
    }

    async getPickingById(id) {
        return await PickingModel.findByPk(id);
    }

    async updatePicking(id, data) {
        const picking = await PickingModel.findByPk(id);
        if (!picking) throw new Error("Registro de picking no encontrado");

        await picking.update(data);
        return picking;
    }

    async deletePicking(id) {
        const picking = await PickingModel.findByPk(id);
        if (!picking) throw new Error("Registro de picking no encontrado");

        await picking.destroy();
        return true;
    }

    // 🟢 CARGA MASIVA – tu caso principal
    async uploadPicking(datos) {

        if (!Array.isArray(datos)) {
            throw new Error("Se esperaba una lista de registros JSON.");
        }

        // Aquí puedes agregar validaciones extra si deseas
        // pero como dijiste, ya vendrán limpios desde Streamlit

        await PickingModel.bulkCreate(datos);

        return {
            status: "ok",
            filas_guardadas: datos.length,
            mensaje: "Datos procesados y guardados con éxito.",
            resumen_procesado: datos
        };
    }
}

export default new PickingService();
