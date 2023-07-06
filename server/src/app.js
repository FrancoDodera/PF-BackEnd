const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const categoryRouter = require('./routes/category.js');
const marcaRouter = require('./routes/marca.js')

app.use(bodyParser.json());
app.use(express.json());

app.use ('/marca', marcaRouter);
app.use('/category', categoryRouter);


// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

module.exports = app;