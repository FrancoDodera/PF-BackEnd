const addNewUser=require('../controllers/users/AddUser')

const{Router} =require('express')
const app = Router()


app.post('/addUser',async(req,res)=>{
    await addNewUser(req,res)
})



module.exports=app
