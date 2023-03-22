const http = require('http'),
    url = require('url');

const LC = require('./lib'); // const LC = require('./lib/index');

http.createServer((req, res) => {
    let count = null;
    let option = null;

    req.on('readable',() => {
        // const queryObject = url.parse(req.url, true).query;
        const { query } = url.parse(req.url, true);

        count = query.count ?? '' ;
        option = query.option ?? '-a';
    });

    req.on('end', () => {
        // const countResult = LC.count(option, count);
        const countResult = LC.count(count);

        console.log(count);
        console.log(option);
        console.log(countResult);



        res.writeHead(200, {
            'content-type': 'application/json'
        });

        res.end(JSON.stringify(countResult));
    });

    req.on('close', () => {
        console.log('closed');
    });

}).listen(8080);
