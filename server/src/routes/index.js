const{Router} =require('express')
const UsersRouter = require('./UsersRoute')
const app= Router()

app.use('/users',UsersRouter)
app.get('/',(req,res)=>{
    return res.json({message:'DEPLOY'})
})

module.exports= app