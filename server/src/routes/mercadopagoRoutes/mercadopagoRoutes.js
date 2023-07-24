const {postPreferenceHandler,finishHandler} = require('../../handlers/mercadopagoHandler/mercadopagoHandler') 
const {Router} = require('express')
const app = Router()

app.get('/', (req, res) => {
    res.send('ruta de mercadoPago')
})

app.post('/', postPreferenceHandler)
app.put('/finish/:id_user', finishHandler)

module.exports = app