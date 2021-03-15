const LC = require('./lib/app'),
    R = require('ramda');

const http = require('http');

http.createServer((req, res) => {
    let body = '';

    req.on('readable',(data) => {
        body += req.read();
    });

    req.on('end', () => {
        console.log(req.headers);

        res.writeHead(200, {
            'content-type': 'text/plain'
        });

        res.end(body);
    });

    req.on('close', () => {
        console.log('closed');
    });

}).listen(8080);