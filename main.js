const LC = require('./lib/index'),
    R = require('ramda');

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let body = '';

    req.on('readable',() => {
        // const queryObject = url.parse(req.url, true).query;
        // console.log(queryObject);
    });



    req.on('end', () => {
        console.log(req.url);

        res.writeHead(200, {
            'content-type': 'application/json'
        });

        res.end(JSON.stringify(LC.count(req.headers.host)));
    });

    req.on('close', () => {
        console.log('closed');
    });

}).listen(8080);
