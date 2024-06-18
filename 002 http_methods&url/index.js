const http = require('http')
const url = require ('url')

const server = (req,res)=>{
console.log(req.method)
// console.log(req.url)

const params = url.parse(req.url,1)
console.log(params)

if(req.method == 'GET' && params.href == '/home'){
res.end('get called home')
}
else if(req.method == 'POST' && params.href == '/about'){
res.end('post called about')
}
}
http.createServer(server).listen(4500)      