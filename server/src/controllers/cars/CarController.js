const data = require('../../fake-api')
const CarModel = require('../../models/CarModel.js')
const Category = require('../../models/CategoryModel.js')
const Marca = require('../../models/MarcaModel.js')

const cleanArray = async (cars) => {
        const updatedCars = [];
        await Promise.all(
            cars.map(async(car)=>{
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
                })
        )
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
    const result = await setCarsBDD();
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
        const updatedCar =await cleanArray(car)
        return updatedCar
    }
    const car = await CarModel.find({ name: { $regex: name, $options: 'i' } })
    const updatedCar =await cleanArray(car)
    return updatedCar
}
module.exports = {
    setCarsBDD,
    getAllCars,
    getCarById,
    getCarByName,
}