const {
  createMarca,
  getMarca,
  getMarcaById,
  updateMarca,
  deleteMarca,
  getMarcas,
} = require("../../controllers/brands/marca");


const createMarcaHandler = async (req, res) => {
  const payload = req.body;
  try {
    const newMarca = await createMarca(payload);
    res.status(200).json(newMarca);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getMarcaHandler = async (req, res) => {
  const { name } = req.query;
  try {
    let result = await getMarca(name);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getMarcaByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    let result = await getMarcaById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getMarcasHandler = async (req, res) => {
  try {
   let result = await getMarcas();
   return res.status(200).json(result);
  } catch (error) {
   return res.status(400).json({ error: error.message });
  }
}


const updateMarcaHandler = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    let result = await updateMarca(id, name, description);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteMarcaHandler = async (req, res) => {
  const id  = req.params.id;
  console.log('id desde backend', id)
  try {
    let result = await deleteMarca(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createMarcaHandler,
  getMarcaHandler,
  getMarcaByIdHandler,
  getMarcasHandler,
  updateMarcaHandler,
  deleteMarcaHandler,
};
