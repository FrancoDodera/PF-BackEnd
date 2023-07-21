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
    if (favorite.deletedCount>0) {
        return ({deleted:true,message:'Favorite removed successfully'})
    } else {
        return ({deleted:false ,message:'Error removing favorite'})
    }
}
const removeFavoritesByUser = async (id_user,id_car) => {
    const favorite = await Favorite.deleteOne({ id_user: id_user ,id_car:id_car});
    if (favorite.deletedCount>0) {
        return ({deleted:true,message:'Favorite removed successfully'})
    } else {
        return ({deleted:false ,message:'Error removing favorite'})
    }
}
const getFavoritesByUser=async(id_user)=>{
    let response=[];
    const favorites=await Favorite.find({id_user:id_user});
    if(favorites.length>0){
        await Promise.all(
            favorites.map(async(favorite)=>{
                const carDetails= await Car.findById(favorite.id_car);
                const body={
                    id_favorite:favorite._id,
                    id_user:favorite.id_user,
                    id_car:carDetails
                }
                response.push(body)
            })
        )
    }
    return response
}
module.exports = {
    addFavorites,
    removeFavorites,
    removeFavoritesByUser,
    getFavoritesByUser
}