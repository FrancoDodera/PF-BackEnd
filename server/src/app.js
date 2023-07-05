const express = require('express');
const app = express();
const routes = require('./routes/index');
const usersRouter = require('./routes/UsersRoute');

// Configuración de middleware

app.use(express.json());
// // ... Otros middlewares

// // Rutas
// const carRoutes = require('./routes/carRoutes');
// app.use('/cars', carRoutes);
// // ... Otras rutas

app.use('/', routes)
app.use('/user',usersRouter)


// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

module.exports = app;