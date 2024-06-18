const express = require('express');

const multer = require('multer');

const { MongoClient } = require('mongodb');

const app = express();

const multExe = multer();

app.use(express.json());

const url = 'mongodb://localhost:27017';
const database = 'WSB-83';

const client = new MongoClient(url);





const dbConnection = async()=>{
    await client.connect();
    const db = await client.db(database);
    const collection = await db.collection('admins');

    return collection;
};

app.post('/insert_data',multExe.none(), async(req,res)=>{

   
    try{
        const collection = await dbConnection();

        const response = await collection.insertOne(req.body);

        res.status(200).json({message:'data inserted successfully', data:response});
        // console.log(response)
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
})
app.get('/update_data',multExe.none(), async(req,res)=>{

   
    try{
        const collection = await dbConnection();

        const response = await collection.updateOne( req.params,
            {
                $set:req.body
            });

        res.status(200).json({message:'data inserted successfully', data:response});
        // console.log(response)
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
})

app.listen(4200,()=>{
    console.log('server is running on port 4200');
})