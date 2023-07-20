const {postSaleHandler, deleteSaleHandler, getAllSalesHandler, getSaleByIdHandler, DeleteCar} = require('../../handlers/saleHandler/saleHandler')
const {Router} = require('express')
const app = Router()

app.get('/', getAllSalesHandler)
app.get('/:id', getSaleByIdHandler)
app.post('/', postSaleHandler)
app.delete('/:id', deleteSaleHandler)
app.put('/',DeleteCar)

module.exports = app