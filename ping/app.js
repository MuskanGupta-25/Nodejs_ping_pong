const readline = require('readline');
const fs = require('fs');
const http = require('http');

const html = fs.readFileSync('./template/index.html' , 'utf-8');

//step1: create a server
const server = http.createServer((request,response)=>{
    response.end (html)
    console.log('A new request received'); //---write route URL(127.0.0.1:8000) in chrome or route URL(localhost:8000)
    //console.log(request);
    //console.log(response);
})
//step2: start a server
server.listen(8000, '127.0.0.1' , ()=>{
    console.log('Server had started');
})