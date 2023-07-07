const express = require('express');

const app = express();
const carRoutes = require('./routes/carsRoutes/CarsRoutes')
const usersRouter = require('./routes/usersRoutes/UsersRoute');
const categoryRouter = require('./routes/categoriesRoutes/category');
const marcaRouter = require('./routes/brandRoutes/marca')
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




app.use('/user',usersRouter)
app.use ('/marca', marcaRouter);
app.use('/category', categoryRouter);

app.use('/cars', carRoutes)

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

module.exports = app;