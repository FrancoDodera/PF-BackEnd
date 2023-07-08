const Reviews = require('../../models/Reviews')

const addReview=async(id_user,id_car,coment,value)=>{
    try {
        const newReview = await new Reviews({
           id_car:id_car,
           id_user:id_user,
           coment:coment,
           value:value
        })
       
        await newReview.save()
        
    } catch (error) {
        throw error
    }

}

module.exports=addReview