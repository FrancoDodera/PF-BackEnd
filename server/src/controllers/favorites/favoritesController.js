const Favorite = require("../../models/FavoriteModel")
const Car=require('../../models/CarModel')
const addFavorites = async(id_user,id_car) => {
    const newFavorite = await new Favorite({
        id_car:id_car,
        id_user:id_user,
    })
    await newFavorite.save()
    const dataCar=await Car.findById(id_car);
    const response={
        id_favorite:newFavorite._id,
        id_user:id_user,
        id_car:dataCar
    }
    return response
}
const removeFavorites = async (id) => {
    const favorite = await Favorite.deleteOne({ _id: id });
    if (favorite) {
        return ({deleted:true,message:'Favorite removed successfully'})
    } else {
        return ({deleted:false ,message:'Error removing favorite'})
    }
}
const removeFavoritesByUser = async (id_user,id_car) => {
    const favorite = await Favorite.deleteOne({ id_user: id_user ,id_car:id_car});
    if (favorite) {
        return ({deleted:true,message:'Favorite removed successfully'})
    } else {
        return ({deleted:false ,message:'Error removing favorite'})
    }
}
module.exports = {
    addFavorites,
    removeFavorites,
    removeFavoritesByUser
}