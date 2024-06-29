
const Product = require("../../models/product/Product");

const fs = require('fs'); //image delete karavne kai liiye node ka module hai

const path = require('path'); //yeh ek module hai jo ki join karta hai path ko


const deleteproducts = async(req,res)=>{
   try{

    const response = await Product.findOneAndDelete(req.params);

    if (response === null) return res.status(402).json({message:'invalid product id'});

   if (fs.existsSync(path.join('src','uploads', response.thumbnail))){
    fs.unlinkSync (path.join('src','uploads', response.thumbnail))
   };

   response.images.forEach((img)=>{
    if (fs.existsSync(path.join('src','uploads', img))){
        fs.unlinkSync (path.join('src','uploads', img))
       };
   })

    // fs.existsSync yeh existing image ko check karta hai ki image pehle sai hai ya nahi
    // path.join  yeh image kai path ko join karega

    res.status(200).json({message:'data delete sucessfully'})

   }
   catch(error){
       console.log(error)
    if(error.reason) return res.status(400).json({message:'invalid product id'})
    res.status(500).json({message:'internal server error'});
   }
};


module.exports = deleteproducts;