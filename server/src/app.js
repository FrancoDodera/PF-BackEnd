const express = require('express');
const addNewUser= require('./controllers/AddUser')
const app = express();

// Configuración de middleware
app.use(express.json());
// // ... Otros middlewares

// // Rutas
// const carRoutes = require('./routes/carRoutes');
// app.use('/cars', carRoutes);
// // ... Otras rutas

app.post('/addUser',(req,res)=>{
  addNewUser(req,res)
})

app.get('/',(req,res)=>{
  return res.json({message:'DEPLOY'})
})

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

module.exports = app;