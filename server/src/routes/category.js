const express = require("express");
const router = express.Router();
const {
  createCategoryHandler,
  getCategoryByIdHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
  getCategoryHandler,
} = require("../handlers/category");


router.get("/", getCategoryHandler);
router.get("/:id", getCategoryByIdHandler);
router.post("/", createCategoryHandler);
router.put("/:id", updateCategoryHandler);
router.delete("/:id", deleteCategoryHandler);

module.exports = router;
