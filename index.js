const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    let path = './views/';

    console.log(req.url, req.method)

    res.setHeader('Content-Type', 'text/html');

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            path += 'contact-me.html';
            res.statusCode = 200;
            break;
        case '/contact': //redirect
            res.statusCode = 301;
            res.setHeader('Location', 'contact-me');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
        }else {
            res.end(data);
        }
    })
})

server.listen(8080, 'localhost',()=>{
    console.log('listening on 8080');
});