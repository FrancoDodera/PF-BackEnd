const {GetSaleSetailBySale,PostSaleDetail,DeleteSaleDetail}=require('../handlers/VentaDetail/ventaDetailHandler')
const {Router} = require('express')
const app = Router()

//agregar un nuevo saleDetail
app.post('/post', PostSaleDetail)

app.put('/delete/:id',DeleteSaleDetail)

app.get('/get/:id', GetSaleSetailBySale)



module.exports = app 