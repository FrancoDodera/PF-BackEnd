const { Router } = require("express");
const {
  createMarcaHandler,
  getMarcaByIdHandler,
  updateMarcaHandler,
  deleteMarcaHandler,
  getMarcaHandler,
<<<<<<< HEAD
  getMarcasHandler,
} = require("../handlers/marca");
=======
} = require("../../handlers/barbara/marca");
>>>>>>> 33ea26ef314d1d3ef6c57765354adce5338d3b8a

const marcaRouter = Router();

marcaRouter.get("/", getMarcaHandler);
marcaRouter.get("/", getMarcasHandler);
marcaRouter.post("/", createMarcaHandler);
marcaRouter.get("/:id", getMarcaByIdHandler);
marcaRouter.put("/:id", updateMarcaHandler);
marcaRouter.delete("/:id", deleteMarcaHandler);


module.exports = marcaRouter;
