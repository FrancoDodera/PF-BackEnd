
const { response } = require('express')
const { getAllCars, getCarById, getCarByName, postCar, deleteCar, updateCar } = require('../../controllers/cars/CarController')


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

const postCarhandeler = async (req,res)=>{
     await postCar(req,res)
}


const updateCarHandler = async(req,res)=>{
    try {
        const respose= await updateCar(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).send(error)
    }
    
}


const deleteCarHandler = async (req,res) => {
    const {id} = req.params
    try {
        const car = await deleteCar(id)
        res.status(200).json(car)
    } catch (error) {
        res.status(500).json({error: 'Error deleting car'})
    }
}

module.exports = {
    getAllCarsHandler,
    getCarByIdHandler,
    getCarByNameHandler,
    postCarhandeler,
    updateCarHandler,
    deleteCarHandler,
}