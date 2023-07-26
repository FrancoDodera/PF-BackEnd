const addNewUser=require('../controllers/users/AddUser')
const authenticationHandler=require('../handlers/usersHandler/authenticationHandler')
const DeleteUserHandler =require('../handlers/usersHandler/deleteUserHandler')
const GetAllUserHandler=require('../handlers/usersHandler/getAllUsersHandler')
const GetUsersHandler=require('../handlers/usersHandler/getUsersHandler')
const RenoveUserHandler=require('../handlers/usersHandler/renoveUsersHandler')
const VerifyUser=require('../handlers/usersHandler/verifyUser')
const GetUserByIdHandler= require('../handlers/usersHandler/GetUserByIdHandler')
const uptadeUser=require('../handlers/Users/UptadeUserHandler')
const loginUser=require('../handlers/usersHandler/loginUser');
const changePasswordHandler=require('../handlers/usersHandler/changePasswordHandler')
const{Router} =require('express')
const app = Router()

//agregar usuario
app.post('/addUser',async(req,res)=>{
    await addNewUser(req,res)
})
//autenticacion google
app.post('/authentication',async(req,res)=>{
    await authenticationHandler(req,res)
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
//login con password y user
app.post('/login',(req,res)=>{
    loginUser(req,res)
})
//obtener toda la info de un usuario por id
app.get('/:id',(req,res)=>{
    GetUserByIdHandler(req,res)
} )

//modificar usuario
app.put('/upgrade',(req,res)=>{
    uptadeUser(req,res)
})

//Cambiar Password
app.put('/changePassword',(req,res)=>{
    changePasswordHandler(req,res)
})

module.exports=app
