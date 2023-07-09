const data = require('../../fake-api.js')
const CarModel = require('../../models/CarModel.js')
const Category = require('../../models/CategoryModel.js')
const Marca = require('../../models/MarcaModel.js')

const cleanArray = async (cars) => {
    const updatedCars = [];
    for (const car of cars) {
        const category = await Category.findById(car.idCategory);
        const marca = await Marca.findById(car.idMarca);
        const updatedCar = {
            _id: car._id,
            amount: car.amount,
            idCategory: {
                _id: category._id,
                name: category.name
            },
            idMarca: {
                _id: marca._id,
                name: marca.name
            },
            name: car.name,
            status:car.status,
            age: car.age,
            color: car.color,
            price: car.price,
            transmission: car.transmission,
            description: car.description,
            image: car.image
        };
        updatedCars.push(updatedCar);
    }
    return updatedCars;
};  
const setCarsBDD = async () => {
    const result = await CarModel.insertMany(data)
    return result
}
const getAllCars = async () => {
    const cars = await CarModel.find()
    if(cars.length>0){
        const updatedCars = await cleanArray(cars);
        return updatedCars;
    }
    await setCarsBDD();
    const updatedResult = await cleanArray(result);
    return updatedResult;
}
const getCarById = async (id) => {
    const car = await CarModel.findById(id)
    const category = await Category.findById(car.idCategory);
    const marca = await Marca.findById(car.idMarca);
    const updatedCar = {
        _id: car._id,
        amount: car.amount,
        idCategory: {
            _id: category._id,
            name: category.name
        },
        idMarca: {
            _id: marca._id,
            name: marca.name
        },
        name: car.name,
        age: car.age,
        status:car.status,
        color: car.color,
        price: car.price,
        transmission: car.transmission,
        description: car.description,
        image: car.image
    };
    return updatedCar
}
const getCarByName = async (name) => {
    if(name== ""){
        const car = await CarModel.find()
        return car
    }
    const car = await CarModel.find({ name: { $regex: name, $options: 'i' } })
    return car
}
module.exports = {
    setCarsBDD,
    getAllCars,
    getCarById,
    getCarByName,
}