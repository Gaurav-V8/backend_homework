const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send('get')
})
app.get('/home',(req,res)=>{
    res.send('get called')
})
app.post('/',(req,res)=>{
    res.send('post')
})
app.post('/home',(req,res)=>{
    res.send('post called')
})

app.listen(5200, ()=>{
    console.log('server is running on port 5200')
});
