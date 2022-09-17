const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '127.0.0.1';

const index =fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const login = fs.readFileSync('./login.html');
const contact = fs.readFileSync('./contact.html');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    if(req.url == '/'){
        res.end(login);
    }
    else if (req.url == '/index'){
        res.end(index);
    }
    else if(req.url == '/contact'){
        res.end(contact);
    }
    else if(req.url == '/about'){
        res.end(about);
    }
    else{
        res.statusCode = 404;
        res.end('Error 404 Page Not found');
    }
});

server.listen(port,hostname,()=>{
    console.log(`Listening to port ${port}`);
});