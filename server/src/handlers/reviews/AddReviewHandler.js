const addReviews= require('../../controllers/reviews/addReview')

const AddReview=(req,res)=>{
    const {id_user,id_car,coment,value}=req.body
    try {
        addReviews(id_user,id_car,coment,value)
        return res.status(200).send('your review was uploaded successfully')
    } catch (error) {
       return res.status(400).send(error)
    }


}
module.exports=AddReview