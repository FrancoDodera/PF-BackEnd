require("dotenv").config();
const Category = require("../../models/category");

//POST
const createCategory = async (data) => {
  try {
    const { name, description } = data;
    if (!name || !description) {
      throw new Error("Name and description are required");
    }
    const newCategory = await Category.create({
      name: name,
      description: description,
    });
    console.log("Category created successfully", newCategory);
    return newCategory;
  } catch (error) {
    console.error("Error creating category");
    throw error;
  }
};

//GET
const getCategory = async (category) => {
  const categorys = await Category.findOne({ category });
  return categorys;
};

//GET
const getCategoryById = async (id) => {
  const category = await Category.findById(id);
  if (category) {
    console.log("Id of the category found:", category);
  } else {
    console.log("The ID of the category does not exist");
  }
};

//UPDATE
const updateCategory = async (id, name, description) => {
  try {
    const categorys = await Category.findOneAndUpdate(
      { _id: id },
      { name: name, description: description },
      { new: true }
    );
    if (categorys) {
      console.log("Category updated successfully", categorys);
      return categorys;
    } else {
      console.log("Error updating category");
      throw new Error("Category not found");
    }
  } catch (error) {
    console.log("Error updating category:", error);
    throw error;
  }
};

//DELETE
const deleteCategory = async (id) => {
  let deleted = await Category.deleteOne({ _id: id });
  if (deleted) {
    console.log("Category deleted successfully", deleted);
  } else {
    console.log("Error deleting category");
  }
};

module.exports = {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
