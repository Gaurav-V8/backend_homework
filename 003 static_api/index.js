const data = require('./appdata')
// console.log(data);
const http = require('http');

const server = (req,res)=>{
    res.end(JSON.stringify(data.consumer_data))
}


http.createServer(server).listen(5000);
console.log(data)