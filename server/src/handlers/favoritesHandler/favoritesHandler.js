const {addFavorites, removeFavorites,removeFavoritesByUser,getFavoritesByUser} = require('../../controllers/favorites/favoritesController')

const addFavoritesHandler = async (req,res) => {
    const {id_user,id_car}=req.body
    try {
        const response=await addFavorites(id_user,id_car)
        return res.status(200).send({message:'The favorite was added successfully',data:response})
    } catch (error) {
        res.status(500).send(error)
    }
}
const removeFavoritesHandler = async (req,res) => {
    const {id} = req.params
    try {
        const favorite = await removeFavorites(id)
        res.status(200).json(favorite)
    } catch (error) {
        res.status(500).json({error: 'Error removing favorite'})
    }
}
const removeFavoritesByUserHandler=async (req,res)=>{
    const {id_user,id_car} = req.body
    try {
        const favorite = await removeFavoritesByUser(id_user,id_car)
        res.status(200).json(favorite)
    } catch (error) {
        res.status(500).json({error: 'Error removing favorite'})
    }
}
const getFavoritesHandler=async(req,res)=>{
    const {id_user}=req.params
    try {
        const favorites = await getFavoritesByUser(id_user)
        res.status(200).json(favorites)
    } catch (error) {
        res.status(500).json({error: 'Error get favorites'})
    }
}
module.exports = {
    addFavoritesHandler,
    removeFavoritesHandler,
    removeFavoritesByUserHandler,
    getFavoritesHandler
}