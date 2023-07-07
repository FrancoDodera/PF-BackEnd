const express = require("express");
const router = express.Router();
const {
  createCategoryHandler,
  getCategoryByIdHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
  getCategoryHandler,
  getCategoriesHandler
} = require("../../handlers/categoriesHandler/categoryHandler");


router.get("/", getCategoryHandler);
router.get("/all", getCategoriesHandler);
router.post("/", createCategoryHandler);
router.get("/:id", getCategoryByIdHandler);
router.put("/:id", updateCategoryHandler);
router.delete("/:id", deleteCategoryHandler);

module.exports = router;
