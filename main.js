const LC = require('./lib/app'),
    R = require('ramda');

//console.log(LC);
console.log(LC.count( 'Hamburg -\r\nGermany 137!', '-c'));
console.log(LC.countFromFile('test/input.txt', '-a'));

var http = require('http');

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