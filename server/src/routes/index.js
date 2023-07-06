const { Router } = require('express');
const marcaRouter = require('./marca.js');
const categoryRouter = require('./category.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/marca', marcaRouter);

router.use('/category', categoryRouter);



module.exports = router;