const {newsHandler} = require('../../handlers/newsHandler/newsHandler')
const {Router} = require('express')
const app = Router()

//NO MODIFICAR
//obtener todas las news
app.get('/', newsHandler)

module.exports = app