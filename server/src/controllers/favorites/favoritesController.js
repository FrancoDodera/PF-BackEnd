const Favorite = require("../../models/FavoriteModel")

const addFavorites = async(id_user,id_car) => {
    const newFavorite = await new Favorite({
        id_car:id_car,
        id_user:id_user,
    })
    await newFavorite.save()
    return newFavorite
}

const removeFavorites = async (id) => {
    const favorite = await Favorite.deleteOne({ _id: id });
    if (favorite) {
        return ({deleted:true,message:'Favorite removed successfully'})
    } else {
        return ({deleted:false ,message:'Error removing favorite'})
    }
}
module.exports = {
    addFavorites,
    removeFavorites,
}