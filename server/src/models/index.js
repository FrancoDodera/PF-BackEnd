const { Router } = require('express');
const categoryRouter = require('./category.js');
const marcaRouter = require('./marca.js');

const router = Router();


router.use('/marca', marcaRouter);

router.use('/category', categoryRouter);



module.exports = router;