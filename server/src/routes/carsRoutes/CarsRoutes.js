const {getAllCarsHandler, getCarByIdHandler, getCarByNameHandler, postCarhandeler, deleteCarHandler} = require('../../handlers/carsHandler/CarHandler')
// const {deleteCar} = require('../../controllers/cars/CarController')
const {Router} = require('express')
const app = Router()

app.get('/', getAllCarsHandler)
app.get('/name', getCarByNameHandler)
app.get('/:id', getCarByIdHandler)
app.delete('/:id', deleteCarHandler)

//publicar un auto
app.post('/addCar', postCarhandeler)

module.exports = app 