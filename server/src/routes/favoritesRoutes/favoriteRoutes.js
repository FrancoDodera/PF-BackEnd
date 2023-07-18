const{Router} =require('express')
const app = Router()
const {addFavoritesHandler, removeFavoritesHandler} = require('../../handlers/favoritesHandler/favoritesHandler')

app.get('/', (req, res) => {
    res.send('ruta de favorites')
})
app.post('/', addFavoritesHandler)
app.delete('/:id', removeFavoritesHandler)
module.exports=app