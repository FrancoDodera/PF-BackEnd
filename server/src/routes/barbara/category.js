const express = require("express");
const router = express.Router();
const {
  createCategoryHandler,
  getCategoryByIdHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
  getCategoryHandler,
<<<<<<< HEAD
  getCategoriesHandler
} = require("../handlers/category");
=======
} = require("../../handlers/barbara/category");
>>>>>>> 33ea26ef314d1d3ef6c57765354adce5338d3b8a


router.get("/", getCategoryHandler);
router.get("/", getCategoriesHandler);
router.post("/", createCategoryHandler);
router.get("/:id", getCategoryByIdHandler);
router.put("/:id", updateCategoryHandler);
router.delete("/:id", deleteCategoryHandler);

module.exports = router;
