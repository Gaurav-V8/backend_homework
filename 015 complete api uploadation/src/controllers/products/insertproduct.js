

const Product = require("../../models/product/Product");

const insert_products =async(req,res,next)=>{

    try{

        const {name,description,price,mrp} = req.body;

        const thumbnail = req.files.thumbnail[0].filename;

        const images = req.files.images.map((imgData)=>{
            return imgData.filename;
        });

        console.log(thumbnail);
        console.log(images);

        const datatoInsert = new Product({
            name,
            description,
            price,
            mrp,
            thumbnail,
            images
        });


        const response = await datatoInsert.save();

        // const filesData = req.files;

        // console.log(filesData);
        res.status(200).json({message:'product inserted sucessfully', data:response});
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'internal server error'});
    }
    
};


module.exports = insert_products;