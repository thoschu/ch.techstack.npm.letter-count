const LC = require('./lib/app'),
    R = require('ramda');
//
// // console.log(LC);
// // console.log(LC.count( 'Hamburg -\r\nGermany 137!', '-c'));
// // console.log(LC.countFromFile('test/input.txt', '-a'));
//  console.log(LC.info());
//
// var validator = require('validator');
//
// //var sqlDetec = validator.matches('<script>foo@bar.com</script>', /\w*((\%27)|(\'))((\%6F)|o|(\%4F))((\%72)|r|(\%52))/ix); //=> true
//
// var test = validator.matches('<e>fooar.com', /((\%3C)|<)[^\n]+((\%3E)|>)/i); //=> true
//
//
//     //Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
//
//
//
//
//
// console.log(test);

// var http = require('http');
//
// var Server = http.Server;
//
// var server = new Server();
//
// server.addListener('request', function (req, resp) {
//     console.log('request');
//
//     resp.statusCode = 200;
//     resp.setHeader('content-type', 'text/plain');
//     resp.write('Thomas');
//     resp.end();
// });
//
// server.addListener('connection', function (socket) {
//     console.log('connection');
// });
//
// server.addListener('close', function (...params) {
//     console.log('close');
// });
//
// server.addListener('checkContinue', function (req, resp) {
//     console.log('checkContinue');
// });
//
// server.addListener('connect', function (req, socket, buf) {
//     console.log('connect');
// });
//
// server.addListener('upgrade', function (req, socket, buf) {
//     console.log('upgrade');
// });
//
// server.addListener('clientError', function (err, socket) {
//     console.log('clientError');
// });
//
// server.listen('8888', 'localhost', 2, function() {
//     console.log('running...');
// });


// const http = require('http');
//
// // Create an HTTP server
// const srv = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('okay');
// });
//
// srv.on('upgrade', (req, socket, head) => {
//     console.log('try to upgrade!');
//
//     socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
//         'Upgrade: WebSocket\r\n' +
//         'Connection: Upgrade\r\n' +
//         '\r\n');
//
//     socket.pipe(socket); // echo back
// });
//
// // now that server is running
// srv.listen(8888, '127.0.0.1', () => {
//
//     // make a request
//     const options = {
//         port: 8888,
//         hostname: '127.0.0.1',
//         headers: {
//             'Connection': 'Upgrade',
//             'Upgrade': 'websocket'
//         }
//     };
//
//     const req = http.request(options);
//     req.end();
//
//     req.on('upgrade', (res, socket, upgradeHead) => {
//         console.log('got upgraded!');
//         socket.end();
//         //process.exit(0);
//     });
// });



// process.stdin.on('readable', () => {
//     /** This is a description of the foo function. */
//     let data = process.stdin.read();
//
//     console.log(typeof data);
//
//     if (data !== null) {
//         process.stdout.write(`Data: ${data}`);
//     }
// });

// var input = "Thomas Schulte";
//
// var chars = input.length;
// var words = input.split(/[\t \n]/).filter(e => e !== '').length;
// var lines = input.split('\n').length;
//
// console.log(chars);
// console.log(words);
// console.log(lines);
//
//console.log(process.argv.pop());

// var str = "ThIs Is A Test On HOW tO counT UppeR CaSE";
//alert(str.replace(/[^A-Z]/g, "").length);

// str = "ÜÇ tas has ho&#350;af gÖtürüldü kona&#286;&#305;n &#304;çine.";
// alert(str.replace(/[^A-ZÜÖÇ&#350;i&#286;]/g, "").length);  // 6


var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    var body = '';
    //console.log(R.keys(req));
    // console.log(req.method);
    // console.log(req.url);
    //console.log(req.headers);
    //console.log(req.trailers);
    //console.log(req.httpVersion);

    req.on('readable', function(data) {
        body += req.read();
    });

    req.on('end', function() {

        console.log(req.headers);

        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.end(body);
    });

    req.on('close', function() {
        console.log('closed');
    });

}).listen(8080);