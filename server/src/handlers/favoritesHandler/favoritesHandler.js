const {addFavorites, removeFavorites} = require('../../controllers/favorites/favoritesController')

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
module.exports = {
    addFavoritesHandler,
    removeFavoritesHandler,
}