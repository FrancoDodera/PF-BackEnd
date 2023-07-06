const { Router } = require("express");
const {
  createMarcaHandler,
  getMarcaByIdHandler,
  updateMarcaHandler,
  deleteMarcaHandler,
  getMarcaHandler,
} = require("../../handlers/barbara/marca");

const marcaRouter = Router();

marcaRouter.get("/", getMarcaHandler);
marcaRouter.get("/:id", getMarcaByIdHandler);
marcaRouter.post("/", createMarcaHandler);
marcaRouter.put("/:id", updateMarcaHandler);
marcaRouter.delete("/:id", deleteMarcaHandler);


module.exports = marcaRouter;
