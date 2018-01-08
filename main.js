/** This is a description of the foo function. */
function foo() {
}


// const LC = require('./lib/app');
//
// console.log(LC.count(' Tom \n S. 11  '));

process.stdin.on('readable', () => {
    /** This is a description of the foo function. */
    let data = process.stdin.read();

    console.log(typeof data);

    if (data !== null) {
        process.stdout.write(`Data: ${data}`);
    }
});

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
console.log(process.argv.pop());