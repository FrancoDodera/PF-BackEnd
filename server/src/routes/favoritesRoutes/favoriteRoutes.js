const{Router} =require('express')
const app = Router()
const {addFavoritesHandler, removeFavoritesHandler,removeFavoritesByUserHandler} = require('../../handlers/favoritesHandler/favoritesHandler')

app.get('/', (req, res) => {
    res.send('ruta de favorites')
})
app.post('/', addFavoritesHandler)
app.delete('/:id', removeFavoritesHandler)
app.post('/delete', removeFavoritesByUserHandler)
module.exports=app