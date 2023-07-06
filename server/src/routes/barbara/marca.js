const { Router } = require("express");
const {
  createMarcaHandler,
  getMarcaByIdHandler,
  updateMarcaHandler,
  deleteMarcaHandler,
  getMarcaHandler,
  getMarcasHandler,
} = require("../../handlers/barbara/marca");

const marcaRouter = Router();

marcaRouter.get("/", getMarcaHandler);
marcaRouter.get("/", getMarcasHandler);
marcaRouter.post("/", createMarcaHandler);
marcaRouter.get("/:id", getMarcaByIdHandler);
marcaRouter.put("/:id", updateMarcaHandler);
marcaRouter.delete("/:id", deleteMarcaHandler);


module.exports = marcaRouter;
