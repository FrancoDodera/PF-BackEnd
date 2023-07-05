const{Router} =require('express')
const addNewUser=require('../controllers/AddUser')
const app= Router()

app.post('/addUser',(req,res)=>{
    addNewUser(req,res)
})


module.exports= app