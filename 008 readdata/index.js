const express = require('express');
const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

client.connect();

// console.log(client);


const app = express();

app.use(express.json());  //important

app.get('/', (req,res)=>{
    try{
        res.status(200).json({msg:'Welcome to api'});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({msg:'Internal server error'});
    }
    
});

app.post('/jsondata', (req,res)=>{
    try{
        console.log(req.body);
        res.status(200).json({msg:"okay"})
    }
    catch(err)
    {
        res.status(500).json({msg:'internal server error'});
    }
});

app.listen(4200, ()=>{
    console.log('server is running on port 4200');
})