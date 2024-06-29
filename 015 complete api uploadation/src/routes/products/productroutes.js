

const  express = require('express');
const uploads = require('../../middlewares/multer/multer');
const { insert_products, read_products, deleteproducts, updateProduct } = require('../../controllers/controler');

const productroutes = express.Router();


productroutes.post('/insert_product',uploads,insert_products);
productroutes.get('/read_data',read_products);
productroutes.delete('/delete_products/:_id',deleteproducts);
productRoutes.put('/update_product/:_id',upload, updateProduct);

module.exports = productroutes;
