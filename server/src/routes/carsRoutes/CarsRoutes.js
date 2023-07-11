const {getAllCarsHandler, getCarByIdHandler, getCarByNameHandler, postCarhandeler, updateCarHandler} = require('../../handlers/carsHandler/CarHandler')
const {Router} = require('express')
const app = Router()

app.get('/', getAllCarsHandler)
app.get('/name', getCarByNameHandler)
app.get('/:id', getCarByIdHandler)

//publicar un auto
app.post('/addCar', postCarhandeler)

//editar un auto
app.put('/updateCar', updateCarHandler)

module.exports = app 