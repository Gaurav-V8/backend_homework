const express = require('express');

const app = express();

const usertoken = 'Gv@542';

    const userdatatoken = "N@24";
    const consumerdatatoken = "M@25";

const checktoken = (req,res,next)=>{
const token = req.params.val;
console.log(token)

if(!usertoken){
    res.status(400).json({msg:'enter token :- checktoken'})
}
else if(usertoken!=token){
    res.status(401).json({msg:'invalid token checktoken'})
}
else{
    next();
}

};
const middleware1 = (req,res,next)=>{
    const token = req.params.val2;
    console.log(token)
    
    if(!userdatatoken){
        res.status(400).json({msg:'enter token :- middleware1'})
    }
    else if(userdatatoken!=token){
        res.status(401).json({msg:'invalid token middleware1'})
    }
    else{
        next();
    }
};
const middleware2 = (req,res,next)=>{
    const token = req.params.val3;
    console.log(token)
    
    if(!consumerdatatoken){
        res.status(400).json({msg:'enter token :- middleware2'})
    }
    else if(consumerdatatoken!=token){
        res.status(401).json({msg:'invalid token middleware2'})
    }
    else{
        next();
    }
};

app.get('/user/:val?/:val2?/:val3?',[checktoken,middleware1,middleware2],(req,res,next)=>{
   
res.status(200).json({msg:'api fetch sucessfully'});
next();
})
app.post('/userdata/:val?/:val3?',[checktoken,middleware2],(req,res,next)=>{
   
res.status(200).json({msg:'api fetch sucessfully'});
next();
})


app.listen(4600,()=>{
    console.log('server is running on port 4600');
})