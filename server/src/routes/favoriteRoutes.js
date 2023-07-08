const{Router} =require('express')
const app = Router()
const AddFavorite= require('../handlers/favorites/AddFavoriteHandler')


//añadir una review
app.post('/addFavorite',(req,res)=>{
    AddFavorite(req,res)
})

module.exports=app