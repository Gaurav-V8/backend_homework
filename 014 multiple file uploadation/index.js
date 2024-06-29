const express = require ('express');
const mongoose = require('mongoose');
const upload = require('./middlewares/multer');


require('./config');

const app = express();


app.post('/insert_data',upload,(req,res)=>{
    try{
        res.status(200).json({message:'data uploaded sucessfully'});
    }
    catch(error){
        console.log(error);
    }
})

app.listen('5800',()=>{
    console.log('server is running on port 5800');
})
