const {postSaleHandler, deleteSaleHandler, getAllSalesHandler, getSaleByIdHandler,getSalesByIdUserHandler, DeleteCar} = require('../../handlers/saleHandler/saleHandler')
const {Router} = require('express')
const app = Router()

//NO MODIFICAR
//obtener todas las ventas
app.get('/', getAllSalesHandler)
//NO MODIFICAR
//obtener el carrito por usuario al iniciar sesion
app.get('/:id', getSaleByIdHandler)
//NO MODIFICAR
//obtener todas las VENTAS por ID_Usuario
app.get('/user/:id', getSalesByIdUserHandler)
//NO MODIFICAR
//Guardar Carrito al cerrar sesion
app.post('/', postSaleHandler)

app.delete('/:id', deleteSaleHandler)
app.put('/',DeleteCar)

module.exports = app