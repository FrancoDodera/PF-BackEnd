const mongoose = require("mongoose");

const marcaModel = new mongoose.Schema({
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
});

const Marca = mongoose.model("Marca", marcaModel);

module.exports = Marca;

