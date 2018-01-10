# de.schulte360.npm.letter-count
This is a calculator which counts the number of letters in a text, useful for your tweets on Twitter, as well as a multitude of other applications.

Whether it is Snapchat, Twitter, Facebook, Yelp or just a note to co-workers or business officials, the number of actual characters matters. What you say may not be as important as how you say it. And how many characters you use.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install letter-count
```

In [Node.js](https://nodejs.org/):

```javascript
const lc = require('letter-count');
```

## API

### `lc.count(option, value)`

```javascript
const Log = console.log;

Log(lc.count("Hamburg - \nGermany 137!")); 
//=> { origin: 'Hamburg - \nGermany 137!', chars: 23, lines: 2, words: 2, numbers: 3, letters: 14, wordsigns: 2, hash: 'd559d4e0ad0770ec6940e6892a9c921b' }
```

The optional `option` argument accepts a string with the following options:

#### `-c` or `--char` 
```javascript
lc.count('-c', "Hamburg - \nGermany 137!"); 
//=> { origin: 'Hamburg - \nGermany 137!', chars: 23 }
```

#### `-ln` or `--lines` 
```javascript
lc.count('-ln', "Hamburg - \nGermany 137!"); 
//=> { origin: 'Hamburg - \nGermany 137!', lines: 2 }
```

#### `-w` or `--words` 
```javascript
lc.count("Hamburg - \nGermany 137!"); 
//=> { origin: 'Hamburg - \nGermany 137!', words: 2 }
```

#### `-ln` or `--lines` 
```javascript
lc.count("Hamburg - \nGermany 137!"); 
//=> { origin: 'Hamburg - \nGermany 137!', chars: 23, lines: 2, words: 2, numbers: 3, letters: 14, wordsigns: 2, hash: 'd559d4e0ad0770ec6940e6892a9c921b' }
```

![beta](http://blog.fundinggates.com/wp-content/uploads/2012/10/quickbooks-beta-test.jpg "BETA" {width=32px height=32px})

[[http://blog.fundinggates.com/wp-content/uploads/2012/10/quickbooks-beta-test.jpg = 32x]]

### Using the `letter-count` binary

To use the `letter-count` binary in your shell, simply install letter-count globally using npm:

```bash
$ npm install -g letter-count 
```

After that you’re able to count from the command line:
```bash
$ letter-count hamburg 
#=> 1 Jan 23:59:59 - hamburg : {"chars": 7, "letters": 7, "lines": 1, "numbers": 0, "words": 1, "wordsigns": 0}
```

To count only the character, use the the `-c`/`--char` option:
```bash
$ letter-count -c hamburg 
#=> 1 Jan 23:59:59 - hamburg : {"chars": 7}
```

## NPM

[https://npmjs.com/package/letter-count](https://www.npmjs.com/package/letter-count)

## Doc

[![jsdoc logo](http://i63.tinypic.com/330yah0.jpg "JSDoc")](http://188.68.54.193:8888/job/npm.letter-count/javadoc/)

## License

This library is available under the [MIT](https://mths.be/mit) license.