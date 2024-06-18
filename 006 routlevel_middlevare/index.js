const express = require('express');

const app = express();
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();



const userdatatoken = "N@24";
const consumerdatatoken = "M@25";
const clientdatatoken = "G@25";


const m1 = (req,res,next)=>{
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
}
const m2 = (req,res,next)=>{
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
}
const m3 = (req,res,next)=>{
    const token = req.params.val4;
    console.log(token)
    
    if(!clientdatatoken){
        res.status(400).json({msg:'enter token :- middleware3'})
    }
    else if(consumerdatatoken!=token){
        res.status(401).json({msg:'invalid token middleware3'})
    }
    else{
        next();
    }
}

router1.use(m1);
router2.use(m2);
router3.use(m3);
// app.use(m2);



router1.get('/router1',(req,res,next)=>{
    res.send('1 rout')
    next();
});
router1.post('/router1',(req,res,next)=>{
    res.send('2 rout')
    next();
});
router1.patch('/router1',(req,res,next)=>{
    res.send('3 rout')
    next();
});
router1.put('/router1',(req,res,next)=>{
    res.send('4 rout')
    next();
});
router1.delete('/router1',(req,res,next)=>{
    res.send('5 rout')
    next();
});


router2.post('/route2',(req,res,next)=>{
    res.send('2.1 rout')
    next();
});
router2.get('/router2',(req,res,next)=>{
    res.send('2.2 rout')
    next();
});
router2.patch('/router2',(req,res,next)=>{
    res.send('2.3 rout')
    next();
});
router2.put('/router2',(req,res,next)=>{
    res.send('2.4 rout')
    next();
});
router2.delete('/router2',(req,res,next)=>{
    res.send('2.5 rout')
    next();
});


router3.delete('/router3',(req,res,next)=>{
    res.send('3.1 rout')
    next();
});
router3.put('/router3',(req,res,next)=>{
    res.send('3.2 rout')
    next();
});
router3.patch('/router3',(req,res,next)=>{
    res.send('3.3 rout')
    next();
});
router3.post('/router3',(req,res,next)=>{
    res.send('3.4 rout')
    next();
});
router3.get('/router3',(req,res,next)=>{
    res.send('3.5 rout')
    next();
});



app.get ('/user/:val2?/:val3?/:val4?',(req,res)=>{
    res.send(' router first');
});
app.post ('/user',(req,res)=>{
    res.send(' router user');
    
});
app.put ('/user',(req,res)=>{
    res.send(' router first');
});
app.patch ('/user',(req,res)=>{
    res.send(' router user');
    
});
app.delete ('/user',(req,res)=>{
    res.send(' router user');
    
});

app.use('/route1',router1);
app.use('/route2',router2);
app.use('/route3',router3);


app.listen(4800,()=>{
    console.log('server is running on port 4800')
}); 