const { getAllCars, getCarById, getCarByName} = require('../../controllers/cars/CarController')

const getAllCarsHandler = async (req, res) => {
    try {
        const cars = await getAllCars()
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json({error: 'Error getting all cars'})
    }
}
const getCarByIdHandler = async (req, res) => {
    const {id} = req.params
    try {
        const car = await getCarById(id)
        res.status(200).json(car)
    } catch (error) {
        res.status(500).json({error: 'Error getting car'})
    }
}
const getCarByNameHandler = async (req, res) => {
    const {name} = req.query
    try {
        const car = await getCarByName(name)
        res.status(200).json(car)
    } catch (error) {
        res.status(500).json({error: 'Error getting car'})
    }
}

module.exports = {
    getAllCarsHandler,
    getCarByIdHandler,
    getCarByNameHandler,
    
}