const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url;
    res.write(url);
    res.end();
});

server.listen(8888, 'localhost', () => {
    console.log('You have created a server on localhost:8888');
});