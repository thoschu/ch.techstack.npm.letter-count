
const LC = require('./lib/app');

console.log(LC.count('tom1 1.1 \n 1 33 \t  sch mama.. '));

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