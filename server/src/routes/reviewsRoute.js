const{Router} =require('express')
const app = Router()
const AddReview=require('../handlers/reviews/AddReviewHandler')


//añadir una review
app.post('/addReview',(req,res)=>{
    AddReview(req,res)
})

module.exports=app