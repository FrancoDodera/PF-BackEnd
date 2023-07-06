const data = require('../fake-api.js')
const CarModel = require('../models/CarModel.js')

const getAllCars = async () => {
    const {cars} = await CarModel.find()
    if (!cars) {
        const result = await CarModel.insertMany(data)
        return result
    } else {
        return cars
    }
}
const getCarById = async (id) => {
    const car = await CarModel.findById(id)
    return car
}
const getCarByName = async (name) => {
    const car = await CarModel.findOne({name: name})
    return car
}
module.exports = {
    getAllCars,
    getCarById,
    getCarByName,

}