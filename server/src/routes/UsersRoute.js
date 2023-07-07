const addNewUser=require('../controllers/users/AddUser')
const DeleteUserHandler =require('../handlers/Users/DeleteUserHandler')
const GetAllUserHandler=require('../handlers/Users/GetAllUsersHandler')
const GetUsersHandler=require('../handlers/Users/GetUsersHandler')
const RenoveUserHandler=require('../handlers/Users/RenoveUsersHandler')
const VerifyUser=require('../handlers/Users/VerifyUser')
const LoginUser=require('../handlers/Users/LoginUser')
const{Router} =require('express')
const app = Router()

//agregar usuario
app.post('/addUser',async(req,res)=>{
    await addNewUser(req,res)
})

//borrado logico de usuario, poniendo el status en false
app.put('/deleteUser/:id', (req,res)=>{
    DeleteUserHandler(req,res)
})

//deshaser borrado logico 
app.put('/renoveUser/:id', (req,res)=>{
    RenoveUserHandler(req,res)
})

//obtener los usuarios que tengan el status en true
app.get('/getUsers',(req,res)=>{
    GetUsersHandler(req,res)
})

//obtener todos los usuarios
app.get('/getAllUsers', (req,res)=>{
    GetAllUserHandler(req,res)
})

//validar login con email
app.post('/verifyUser',(req,res)=>{
    VerifyUser(req,res)
})
//login
app.post('/login',(req,res)=>{
    LoginUser(req,res)
})


module.exports=app
