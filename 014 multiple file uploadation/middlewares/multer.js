const multer = require('multer');


// for single file .single ('thumbnail');

// const upload=multer({
//     storage:multer.diskStorage({
//         destination:function(req,res,cb){
//             cb(null,'uploads');

//         },
//         filename:function(req,file,cb){
//             const newname = Date.now() + file.originalname;

//             cb(null,newname);
//         }
//     })
// }).single('thumbnail');

// const upload=multer({
//     storage:multer.diskStorage({
//         destination:function(req,res,cb){
//             cb(null,'uploads');

//         },
//         filename:function(req,file,cb){
//             const newname = Date.now() + file.originalname;

//             cb(null,newname);
//         }
//     })
// }).array('images',20);

// for multiple file .array('images',10);

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,res,cb){
            cb(null,'uploads');

        },
        filename:function(req,file,cb){
            const newname = Date.now() + file.originalname;

            cb(null,newname);
        }
    })
}).fields([
    {name:'thumbnail',maxCount:1},
    {name:'images',maxCount:10}
]);

// for multiple fields .fields([
// {
    // name:'thumbnail',maxcount:1
// }])

module.exports= upload;