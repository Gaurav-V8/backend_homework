


const deleteproducts = require('./products/deleteproduct');
const insert_products = require('./products/insertproduct');
const read_products = require('./products/readproduct');
const updateProduct = require('./products/updateproduct');

module.exports={
    insert_products,
    read_products,
    deleteproducts,
    updateProduct
};