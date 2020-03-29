const http = require('http');

http.createServer((req,res) => {
    res.write('Hello world')
    res.end();
}).listen(4500,() => {
    console.log('Server running');});