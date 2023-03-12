const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>root</title></head>');
        res.write('<body><h1>My first page</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(req.url === '/home') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(req.url === '/about') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body><h1>Welcome to about us page</h1></body>');
        res.write('</html>');
        res.end();
    }
    if(req.url === '/node') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Node</title></head>');
        res.write('<body><h1>Welcome to my node js project</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(4000);