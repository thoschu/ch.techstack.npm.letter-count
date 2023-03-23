const chalk = require('chalk'),
    http = require('http'),
    url = require('url'),
    lc = require('./lib');

const PORT = 8080;
const HOST = '0.0.0.0';

http.createServer((req, res) => {
    let input, option = null;

    req.on('readable',() => {
        const { query } = url.parse(req.url, true);

        input = query.input ?? 'letter-count by Tom S. © 2023' ;
        option = query.option ?? '-a';
    });

    req.on('end', () => {
        const countResult = lc.count(input, option);

        res.writeHead(200, {
            'content-type': 'application/json'
        });

        res.end(JSON.stringify(countResult));
    });

    req.on('close', () => {
        console.log(chalk.blue('%s'), 'closed');
    });
}).listen(PORT, HOST, () => {
    console.log(chalk.yellow.bold(`Running on: http://localhost:${PORT}`));
    console.log(`Example: http://localhost:${PORT}/?input=hallo or http://localhost:${PORT}/?input=hallo&option=-c`);
});
