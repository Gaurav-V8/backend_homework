const express = require('express');
require('./database/config')
const productroutes = require('./routes/products/productroutes');

const allRoutes = express.Router();


allRoutes.use('/product',productroutes);

module.exports = allRoutes;