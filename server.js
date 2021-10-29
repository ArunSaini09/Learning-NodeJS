const express = require('express');
const app = express();

app.listen(8080);


//no need to manually create the http server with server.createServer, simply get the webpages!

app.get('/', (req,res)=>{
    console.log(req.url, req.method);
    //the relative path, and to what it is relative to
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req,res) =>{
    console.log(req.url, req.method);
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/contact-me', (req,res) =>{
    console.log(req.url, req.method);
    res.sendFile('./views/contact-me.html', {root: __dirname});
});

//express redirects
app.get('/contact', (req,res) =>{
    console.log(req.url, req.method);
    res.redirect('/contact-me');
});

//404 - middleware
app.use((req,res)=>{
    console.log(req.url, req.method);
    res.status(404).sendFile('./views/404.html', {root:__dirname});
})