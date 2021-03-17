const http = require('http'),
    url = require('url'),
    readline = require('readline')
    R = require('ramda');

const LC = require('./lib'); // const LC = require('./lib/index');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.stdin.on('data',data => {
    const payload = data.toString();
    const reg = new RegExp('[8-9][0-9][0-9][0-9]');
    const port = (payload === undefined || payload === null || !reg.test(payload)) ? '8080' : payload;
    let counter = 0;

    http.createServer((req, res) => {
        let count = null;
        let option = null;



        rl.question("Run: ", param => {
            console.log(param);
        });

        req.on('readable',() => {
            const queryObject = url.parse(req.url, true).query

            count = R.isNil(queryObject.count) ? '' : queryObject.count;
            option = R.isNil(queryObject.option) ? '-a' : queryObject.option;
            counter++;
        });

        req.on('end', () => {
            res.writeHead(200, {
                'content-type': 'application/json'
            });

            res.end(JSON.stringify(LC.count(option, count)));
        });

        req.on('close', () => {
            console.log(`${counter}`);
            // process.stdout.write(`${counter}`);
        });
    }).listen(port);
});

