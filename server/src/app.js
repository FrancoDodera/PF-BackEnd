const express = require('express');
const addNewUser= require('./controllers/AddUser')
const app = express();
const routes = require('./routes/index');
const usersRouter = require('./routes/UsersRoute');

// Configuración de middleware

app.use(express.json());
// // ... Otros middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// // Rutas
// const carRoutes = require('./routes/carRoutes');
// app.use('/cars', carRoutes);
// // ... Otras rutas

app.use('/', routes)
app.use('/user',usersRouter)


app.use('/cars', carRoutes)

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

module.exports = app;