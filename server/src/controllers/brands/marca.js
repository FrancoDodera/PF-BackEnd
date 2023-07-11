require("dotenv").config();
const Car = require("../../models/CarModel");
const Marca = require("../../models/MarcaModel");

//POST
const createMarca = async (data) => {
  try {
    const { name , description } = data;
    if (!name || !description) {
      throw new Error("Name and description are required");
    }
    const newMarca = await Marca.create({
      name: name,
      description: description,
    });
    console.log("Brand created successfully", newMarca);
    return newMarca;
  } catch (error) {
    console.error("Error creating brand");
    throw error;
  }
};

//GET MARCA
const getMarca = async (marca) => {
  const marcas = await Marca.findOne({name:marca})
  return marcas;
};

//GET BY ID
const getMarcaById = async (id) => {
  const marca = await Marca.findById(id);
  if (marca) {
    return marca
    // console.log("Id of the brand found:", marca);
  } else {
    return "ID of the brand does not exist"
    // console.log("ID of the brand does not exist");
  }
};


//GET ALL
const getMarcas = async () => {
  const marcas = await Marca.find();
  return marcas;
};


//UPDATE
const updateMarca = async (id, name, description) => {
  try {
    const marca = await Marca.findOneAndUpdate(
      { _id: id },
      { name: name, 
      description: description },
      { new: true }
    );
    if (marca) {
      console.log("Brand updated successfully", marca);
      return marca;
    } else {
      console.log("Error updating brand");
      throw new Error("Brand not found");
    }
  } catch (error) {
    console.error("Error updating brand:", error);
    throw error;
  }
};

//DELETE
const deleteMarca = async (id) => {

  const cars= await Car.find({idMarca:id})
  console.log(cars)
  
  if (cars[0]) {
    if (cars[0].active===true) {
      return({deleted:false,message:'this brand is related to a car'})
    }
  }
  let deleted = await Marca.deleteOne({ _id: id });
    if (deleted) {
      return ({deleted:true,message:'Brand deleted successfully'})
        // console.log("Brand deleted successfully", deleteMarca);
    } else {
      return ({deleted:false ,message:'Error deleting brand'})
        // console.log("Error deleting brand");
    }
}


module.exports = {
  createMarca,
  getMarca,
  getMarcaById,
  getMarcas,
  updateMarca,
  deleteMarca,
}