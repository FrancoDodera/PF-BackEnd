const {postPreferenceHandler} = require('../../handlers/mercadopagoHandler/mercadopagoHandler') 
const {Router} = require('express')
const app = Router()

app.get('/', (req, res) => {
    res.send('ruta de mercadoPago')
})

app.post('/', postPreferenceHandler)

module.exports = app