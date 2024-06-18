const express = require("express");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const database = async () => {
  await client.connect();
  const db = await client.db("user_database");

  

  return db;
};

const insertData = async () => {
  const db = await database();
  const collection = await db.collection("users");

  const response = await collection.insertMany([
    {   name: "gaurav",
        age: "25", 
        contact: "15481465",
        email: "abc@gmail.com" },
    {
      name: "harsh",
      age: "27",
      contact: "548964",
      email: "harsh@gmail.com",
    },
    {
      name: "shubham",
      age: "22",
      contact: "3514962",
      email: "shubham@gmail.com",
    },
    {
      name: "nikhil",
      age: "29",
      contact: "4198654",
      email: "nikhil@gmail.com",
    },
  ]);

  console.log(response);
}
// insertData();

const readData = async()=>{
    try{
        const db = await database();
        const collection = await db.collection("users");
    
    
        const response = await collection.find();
        console.log(response);
    }
    catch(err){
        console.log(err)
    }
    

}
// readData();

const deleteData = async()=>{
    try{
        const db = await database();
        const collection = await db.collection("admins");
    
    
        const response = await collection.deleteOne(
            { name: "gaurav",
            age: "25", 
            contact: "15481465",
            email: "abc@gmail.com" }
        
    );
        console.log(response);
    }
    catch(err){
        console.log(err)
    }
    
}
// deleteData();
const deletemanyData = async()=>{
    try{
        const db = await database();
        const collection = await db.collection("admins");
    
    
        const response = await collection.deleteMany(
            { name: "harsh" }
        
    );
        console.log(response);
    }
    catch(err){
        console.log(err)
    }
    
}
deletemanyData();

const updateData = async()=>{
    try{
        const db = await database();
        const collection = await db.collection("admins");
    
    
        const response = await collection.updateOne(
            { name: "harsh"},{$set:{name:"Manish"}}
        
    );
        console.log(response);
    }
    catch(err){
        console.log(err)
    }
    
}
// updateData();

const app = express();

app.use(express.json());

app.listen(4600, () => {
  console.log("server is running on port 4600");
});
