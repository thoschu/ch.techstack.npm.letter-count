[![npm version](https://badge.fury.io/js/letter-count.svg)](https://badge.fury.io/js/letter-count)
[![Dependency Status](https://david-dm.org/thoschu/de.schulte360.npm.letter-count.svg)](https://david-dm.org/thoschu/de.schulte360.npm.letter-count)
[![Dev Dependency Status](https://david-dm.org/thoschu/de.schulte360.npm.letter-count/dev-status.svg)](https://david-dm.org/thoschu/de.schulte360.npm.letter-count?type=dev)
[![Build Status](https://travis-ci.org/thoschu/de.schulte360.npm.letter-count.svg?branch=master)](https://travis-ci.org/thoschu/de.schulte360.npm.letter-count)

[![NPM Badge](https://nodei.co/npm/letter-count.png?downloads=true)](https://www.npmjs.com/package/letter-count)

# de.schulte360.npm.letter-count
This is a calculator which counts the number of letters/characters/lines/words/numbers/wordsigns in a text, useful for your tweets on Twitter, as well as a multitude of other applications.

Whether it is Snapchat, Twitter, Facebook, Yelp or just a note to co-workers or business officials, the number of actual characters matters. What you say may not be as important as how you say it. And how many characters you use.


## Installation

Via [npm](https://www.npmjs.com/):

```bash
$ npm install letter-count
```

In [Node.js](https://nodejs.org/):

```javascript
const lc = require('letter-count');
```

## API

## `lc.count(value, [option])`

```javascript
const Log = console.log;

Log(lc.count("Hamburg - \nGermany 137!")); 
//=> { 
//      origin: 'Hamburg - \nGermany 137!', 
//      chars: 23, 
//      lines: 2, 
//      words: 2, 
//      numbers: 3, 
//      letters: 14, 
//      wordsigns: 2, 
//      hash: 'd559d4e0ad0770ec6940e6892a9c921b' 
//  }
```

### ℹ The optional `option` argument accepts a string with the following options:

#### Counts only the characters:
##### `-c` or `--chars` 
```javascript
lc.count("Hamburg - \nGermany 137!", '-c'); 
//=> { origin: 'Hamburg - \nGermany 137!', chars: 23 }
```

#### Counts only the lines:
##### `-ln` or `--lines` 
```javascript
lc.count("Hamburg - \nGermany 137!", '-ln'); 
//=> { origin: 'Hamburg - \nGermany 137!', lines: 2 }
```

#### Counts only the characters:
##### `-w` or `--words` 
```javascript
lc.count("Hamburg - \nGermany 137!", '-w'); 
//=> { origin: 'Hamburg - \nGermany 137!', words: 2 }
```

#### Counts only the numbers:
##### `-n` or `--numbers` 
```javascript
lc.count("Hamburg - \nGermany 137!", '-n'); 
//=> { origin: 'Hamburg - \nGermany 137!', numbers: 3 }
```

#### Counts only the letters:
##### `-l` or `--letters` 
```javascript
lc.count("Hamburg - \nGermany 137!", '-l'); 
//=> { origin: 'Hamburg - \nGermany 137!', letters: 14 }
```

#### Counts only the words sings:
##### `-ws` or `--wordsigns` 
```javascript
lc.count("Hamburg - \nGermany 137!", '-ws'); 
//=> { origin: 'Hamburg - \nGermany 137!', wordsigns: 2 }
```

## `lc.countFromFile(file, [option])`

```javascript
const Log = console.log;

Log(lc.countFromFile('/path/to/file.txt')); 
//=> { 
//      origin: 'Hamburg - \nGermany 137!', 
//      chars: 23, 
//      lines: 2, 
//      words: 2, 
//      numbers: 3, 
//      letters: 14,
//      wordsigns: 2, 
//      hash: 'd559d4e0ad0770ec6940e6892a9c921b' 
// }
```

### ╳ The optional `option` argument accepts a string with the following options:

#### Counts only the characters:
##### `-c` or `--chars` 
```javascript
lc.countFromFile('/path/to/file.txt', '--chars'); 
//=> { origin: 'Hamburg - \nGermany 137!', chars: 23 }
```

#### Counts only the lines:
##### `-ln` or `--lines` 
```javascript
lc.countFromFile('/path/to/file.txt', '--lines'); 
//=> { origin: 'Hamburg - \nGermany 137!', lines: 2 }
```

#### Counts only the words:
##### `-w` or `--words` 
```javascript
lc.countFromFile('/path/to/file.txt', '--words'); 
//=> { origin: 'Hamburg - \nGermany 137!', words: 2 }
```

#### Counts only the numbers:
##### `-n` or `--numbers` 
```javascript
lc.countFromFile('/path/to/file.txt', '--numbers'); 
//=> { origin: 'Hamburg - \nGermany 137!', numbers: 3 }
```

#### Counts only the letters:
##### `-l` or `--letters` 
```javascript
lc.countFromFile('/path/to/file.txt', '--letters'); 
//=> { origin: 'Hamburg - \nGermany 137!', letters: 14 }
```

#### Counts only the word signs:
##### `-ws` or `--wordsigns` 
```javascript
lc.countFromFile('/path/to/file.txt', '--wordsigns'); 
//=> { origin: 'Hamburg - \nGermany 137!', wordsigns: 2 }
```

## `lc.info([option])`

```javascript
const Log = console.log;

Log(lc.info()); 
//=>  { 
//      name: 'letter-count',
//      version: 'x.x.x',
//      description: 'This is a calculator which counts the number of letters/characters/lines/words/numbers/wordsigns in a text, useful for your tweets on Twitter, as well as a multitude of other applications.',
//      author: { 
//          name: 'Tom S.', 
//          email: 'thoschulte@gmail.com' 
//      },
//      license: 'MIT' 
//  }
```

### → The optional `option` argument accepts a string with the following options:

#### Returns only the project name:
##### `-n` or `--name` 
```javascript
lc.info('--name'); 
//=> letter-count
```

#### Returns only the project version:
##### `-v` or `--version` 
```javascript
lc.info('--version'); 
//=> x.x.x
```

#### Returns only the project description:
##### `-d` or `--description` 
```javascript
lc.info('--description'); 
//=> e.g. Hello world...
```

#### Returns only the project author:
##### `-a` or `--author` 
```javascript
lc.info('--author'); 
//=> { name: 'Tom S.', email: 'thoschulte@gmail.com' }
```

#### Returns only the project license:
##### `-l` or `--license` 
```javascript
lc.info('--license'); 
//=> MIT
```

### Using the `letter-count` binary

#### To use the `letter-count` binary in your shell, simply install letter-count globally using npm:

```bash
$ npm install -g letter-count 
```

#### After that you’re able to count from the command line:
```bash
$ letter-count hamburg 
#=> 1 Jan 23:59:59 - hamburg : {"chars": 7, "letters": 7, "lines": 1, "numbers": 0, "words": 1, "wordsigns": 0}
```

##### To count only the character, use the the `-c`/`--char` option:
```bash
$ letter-count -c hamburg 
#=> 1 Jan 23:59:59 - hamburg : {"chars": 7, "origin": "hamburg"}
```

##### To count only the lines, use the the `-ln`/`--lines` option:
```bash
$ letter-count -ln tom s. 
#=> 1 Jan 12:00:00 - tom s. : {"lines": 1, "origin": "tom s."}
```

##### To count only the words, use the the `-w`/`--words` option:
```bash
$ letter-count -w tom hamburg 
#=> 1 Jan 12:00:00 - tom hamburg : {"words": 2, "origin": "tom hamburg"}
```

##### To count only the numbers, use the the `-n`/`--numbers` option:
```bash
$ letter-count -n hamburg 20457
#=> 1 Jan 12:00:00 - hamburg 20457 : {"numbers": 5, "origin": "hamburg 20457"}
```

##### To count only the letters, use the the `-l`/`--letters` option:
```bash
$ letter-count -l tom 13 hh
#=> 1 Jan 12:00:00 - tom 13 hh : {"letters": 5, "origin": "tom 13 hh"}
```

##### To count only the wordsigns, use the the `-ws`/`--wordsigns` option:
```bash
$ letter-count -ws germany!
#=> 1 Jan 12:00:00 - germany! : {"wordsigns": 1, "origin": "germany!"}
```

##### To count in a file, use the the `-f`/`--file` option and the path to the file:
```bash
$ letter-count -f path/to/file/input.txt
#=> 1 Jan 12:00:00 - test/input.txt : {"chars": 23, "hash": "fdf25c637725818100fae9d635edf787", "letters": 14, "lines": 2, "numbers": 3, "origin": "Hamburg -\r\nGermany 137!", "words": 2, "wordsigns": 2}
```

***

## NPM

[https://npmjs.com/package/letter-count](https://www.npmjs.com/package/letter-count)

***

## Doc

[![jsdoc logo](http://i63.tinypic.com/330yah0.jpg "JSDoc")](http://188.68.54.193:8888/job/npm.letter-count/javadoc/)

***

## RinKit

[https://npm.runkit.com/letter-count](https://npm.runkit.com/letter-count)

***

## License

This library is available under the [MIT](https://mths.be/mit) license.
---