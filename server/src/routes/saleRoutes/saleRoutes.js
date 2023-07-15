const {postSaleHandler, deleteSaleHandler, getAllSalesHandler, getSaleByIdHandler} = require('../../handlers/saleHandler/saleHandler')
const {Router} = require('express')
const app = Router()

app.get('/', getAllSalesHandler)
app.get('/:id', getSaleByIdHandler)
app.post('/addSale', postSaleHandler)
app.delete('/:id', deleteSaleHandler)

module.exports = app