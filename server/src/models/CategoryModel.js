const mongoose = require("mongoose");

const CategoryModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
    description: {
      type: String,
      required: true,
    },
  }, 
);
 
const Category = mongoose.model("Category", CategoryModel);

module.exports = Category;
