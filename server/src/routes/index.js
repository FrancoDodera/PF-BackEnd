const{Router} =require('express')
const addNewUser=require('../controllers/AddUser')
const app= Router()

app.post('/addUser',(req,res)=>{
    addNewUser(req,res)
})
app.get('/',(req,res)=>{
    return res.json({message:'DEPLOY'})
})


module.exports= app