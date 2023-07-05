const addNewUser=require('../controllers/users/AddUser')

const{Router} =require('express')
const app = Router()


app.post('/addUser',(req,res)=>{
    addNewUser(req,res)
})



module.exports=app
