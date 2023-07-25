const express = require('express');

const app = express();

const carRoutes = require('./routes/carsRoutes/CarsRoutes')
const usersRouter = require('./routes/UsersRoute');
const categoryRouter = require('./routes/categoriesRoutes/category');
const marcaRouter = require('./routes/brandRoutes/marca')
const reviewsRoutes = require('./routes/reviewsRoute')
const favoritesRoutes =require('./routes/favoritesRoutes/favoriteRoutes')
const paymentsRoutes = require('./routes/paymentsRoutes/paymentsRoutes')
const saledetail =require('./routes/saleDetail')
const sale = require('./routes/saleRoutes/saleRoutes')
const mercadopagoRoutes = require('./routes/mercadopagoRoutes/mercadopagoRoutes')
// Configuración de middleware

app.use(express.json());
// // ... Otros middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
  // res.header('Access-Control-Allow-Origin', 'https://superb-cuchufli-d6ef80.netlify.app'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.use('/favorites', favoritesRoutes)
app.use('/reviews',reviewsRoutes)
app.use('/user',usersRouter)
app.use('/marca', marcaRouter);
app.use('/category', categoryRouter);
//ruta para webhooks en mercado pago
app.use('/payments', paymentsRoutes);
app.use('/cars', carRoutes)
app.use('/detail',saledetail)

app.use('/sale', sale)
app.use('/checkout', mercadopagoRoutes)


// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

module.exports = app;