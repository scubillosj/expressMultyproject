import { ProductoNegado } from "../models/index.js";
import { Op } from "sequelize";

// GET /api/producto-negado
export const listarProductoNegado = async (req, res) => {
  try {
    const {
      marca,
      fecha,
      search,
      ordering = "-fecha"
    } = req.query;

    let where = {};

    if (marca) where.marca = marca;
    if (fecha) where.fecha = fecha;

    if (search) {
      where[Op.or] = [
        { producto: { [Op.iLike]: `%${search}%` } },
        { origen: { [Op.iLike]: `%${search}%` } }
      ];
    }

    const order = ordering.startsWith("-")
      ? [[ordering.substring(1), "DESC"]]
      : [[ordering, "ASC"]];

    const data = await ProductoNegado.findAll({
      where,
      order
    });

    return res.json(data);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// POST (create)
export const crearProductoNegado = async (req, res) => {
  try {
    const nuevo = await ProductoNegado.create(req.body);
    return res.status(201).json(nuevo);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: "Datos inválidos" });
  }
};

// GET por ID
export const obtenerProductoNegado = async (req, res) => {
  try {
    const dato = await ProductoNegado.findByPk(req.params.id);
    if (!dato) return res.status(404).json({ error: "Registro no encontrado" });
    return res.json(dato);
  } catch {
    return res.status(500).json({ error: "Error interno" });
  }
};

// PATCH / PUT
export const actualizarProductoNegado = async (req, res) => {
  try {
    const [updated] = await ProductoNegado.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated === 0) return res.status(404).json({ error: "No encontrado" });

    const actualizado = await ProductoNegado.findByPk(req.params.id);
    return res.json(actualizado);

  } catch (err) {
    return res.status(400).json({ error: "Datos inválidos" });
  }
};

// DELETE
export const eliminarProductoNegado = async (req, res) => {
  try {
    const deleted = await ProductoNegado.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) return res.status(404).json({ error: "No encontrado" });

    return res.json({ message: "Eliminado" });

  } catch {
    return res.status(500).json({ error: "Error interno" });
  }
};


export const uploadExcelProductoNegado = async (req, res) => {
    try {
        const datosCrudos = req.body;

        if (!Array.isArray(datosCrudos)) {
            return res.status(400).json({
                error: "Se esperaba una lista de registros JSON."
            });
        }

        const registrosLimpios = datosCrudos.map(reg => ({
            fecha: reg.fecha,
            producto: reg.producto,
            marca: reg.marca,
            cantidad_negada: reg.cantidad_negada,
            origen: reg.origen,
            referencia: reg.referencia
        }));

        await ProductoNegado.bulkCreate(registrosLimpios);

        return res.status(201).json({
            status: "ok",
            filas_guardadas: registrosLimpios.length,
            mensaje: "Datos procesados y guardados con éxito.",
            resumen_procesado: registrosLimpios
        });

    } catch (error) {
        console.error("Error en carga de producto negado:", error);
        return res.status(500).json({
            status: "error",
            detalle: `Error interno en el procesamiento: ${error.message}`
        });
    }
};