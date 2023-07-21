const{Router} =require('express')
const app = Router()
const {getFavoritesHandler,addFavoritesHandler, removeFavoritesHandler,removeFavoritesByUserHandler} = require('../../handlers/favoritesHandler/favoritesHandler')

app.get('/:id_user',getFavoritesHandler)
app.post('/', addFavoritesHandler)
app.delete('/:id', removeFavoritesHandler)
app.post('/delete', removeFavoritesByUserHandler)
module.exports=app