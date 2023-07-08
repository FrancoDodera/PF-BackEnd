const Favorite = require("../../models/favorites")


const addFavorite=async(id_user,id_car)=>{
    try {
        const newFavorite = await new Favorite({
        id_car:id_car,
        id_user:id_user,
     })
    
     await newFavorite.save()
    } catch (error) {
        throw error
    }
    

}

module.exports=addFavorite