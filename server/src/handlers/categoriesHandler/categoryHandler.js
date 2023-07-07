const {
  createCategory,
  getCategory,
  getCategoryById,
  getCategories,

  updateCategory,
  deleteCategory,
} = require("../../controllers/categories/category");

const createCategoryHandler = async (req, res) => {
  const payload = req.body;
  try {
    const newCategory = await createCategory(payload);
    return res.status(200).json(newCategory);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getCategoriesHandler = async (req, res) => {
 try {
  let result = await getCategories();
  return res.status(200).json(result);
 } catch (error) {
  return res.status(400).json({ error: error.message });
 }
}

const getCategoryHandler = async (req, res) => {
  const { name } = req.query;
  try {
    let result = await getCategory(name);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getCategoryByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    let result = await getCategoryById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


const updateCategoryHandler = async (req, res) => {
const { id } = req.params;
const { name, description } = req.body;
try {
  let result = await updateCategory(id, name, description);
  return res.status(200).json(result);
} catch (error){
  return res.status(400).json({ error: error.message})
}
}

const deleteCategoryHandler = async (req, res) => {
  const { id } = req.params;
  try {
    let result = await deleteCategory(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


module.exports = {
  createCategoryHandler,
  getCategoryByIdHandler,
  getCategoriesHandler,
  getCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
};
