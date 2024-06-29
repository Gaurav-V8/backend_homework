const mongoose = require('mongoose');

mongoose.connect ("mongodb+srv://gauravvaishnav123456:JPmMEEQskm8SCIZZ@gaurav.gvokyh3.mongodb.net/file_uploadation_tmp?retryWrites=true&w=majority&appName=gaurav")

.then(()=>{
    console.log('database connected sucessfuly')
})
.catch((error)=>{
    console.log(error)
})