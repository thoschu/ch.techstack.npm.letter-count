const http = require('http'),
    url = require('url'),
    R = require('ramda');

const LC = require('./lib'); // const LC = require('./lib/index');

http.createServer((req, res) => {
    let count = null;
    let option = null;

    req.on('readable',() => {
        const queryObject = url.parse(req.url, true).query

        count = R.isNil(queryObject.count) ? '' : queryObject.count;
        option = R.isNil(queryObject.option) ? '-a' : queryObject.option;
    });

    req.on('end', () => {
        res.writeHead(200, {
            'content-type': 'application/json'
        });

        res.end(JSON.stringify(LC.count(option, count)));
    });

    req.on('close', () => {
        console.log('closed');
    });

}).listen(8080);
