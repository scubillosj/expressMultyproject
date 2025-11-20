import { Picking }  from '../models/index.js';

class pickingService {
    
    async createPicking(data) {
        return await Picking.create(data);
    }

    async getPicking(filtros = {}) {
    return await Picking.findAll({
      where: filtros,
      order: [['fechaFactura', 'DESC']]
    });
    }


    async getPickingById(id) {
        return await Picking.findByPk(id);
    }

    async updatePicking(id, data) {
        const picking = await Picking.findByPk(id);
        if (!picking) throw new Error("Registro de picking no encontrado");

        await picking.update(data);
        return picking;
    }

    async deletePicking(id) {
        const picking = await Picking.findByPk(id);
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

        await Picking.bulkCreate(datos);

        return {
            status: "ok",
            filas_guardadas: datos.length,
            mensaje: "Datos procesados y guardados con éxito.",
            resumen_procesado: datos
        };
    }
}

export default new pickingService();
