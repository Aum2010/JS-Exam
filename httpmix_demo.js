const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    if(req.url == '/') {
        fs.readFile(path.join(__dirname,'demohtml1.html'), (err,data) => {
            if(err) throw err;
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.end(data)
        })
    }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT ,() => console.log('Server begin'))