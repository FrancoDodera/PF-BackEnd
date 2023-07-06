const {getAllCarsHandler, getCarByIdHandler, getCarByNameHandler} = require('../handlers/CarHandler')
const {Router} = require('express')
const app = Router()

app.get('/', getAllCarsHandler)
app.get('/name', getCarByNameHandler)
app.get('/:id', getCarByIdHandler)

module.exports = app