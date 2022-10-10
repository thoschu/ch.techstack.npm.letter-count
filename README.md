# letter-count

[![npm version](https://badge.fury.io/js/letter-count.svg)](https://badge.fury.io/js/letter-count)
[![Dependency Status](https://david-dm.org/thoschu/de.schulte360.npm.letter-count.svg)](https://david-dm.org/thoschu/de.schulte360.npm.letter-count)
[![Dev Dependency Status](https://david-dm.org/thoschu/de.schulte360.npm.letter-count/dev-status.svg)](https://david-dm.org/thoschu/de.schulte360.npm.letter-count?type=dev)
[![Build Status](https://travis-ci.org/thoschu/ch.techstack.npm.letter-count.svg?branch=master)](https://travis-ci.org/thoschu/ch.techstack.npm.letter-count)
[![Coverage Status](https://coveralls.io/repos/github/thoschu/de.schulte360.npm.letter-count/badge.svg?branch=master)](https://coveralls.io/github/thoschu/de.schulte360.npm.letter-count?branch=master)
[![Code Climate](https://codeclimate.com/github/thoschu/de.schulte360.npm.letter-count/badges/gpa.svg)](https://codeclimate.com/github/thoschu/de.schulte360.npm.letter-count)
[![Known Vulnerabilities](https://snyk.io/test/github/thoschu/de.schulte360.npm.letter-count/badge.svg)](https://snyk.io/test/github/thoschu/de.schulte360.npm.letter-count)
[![GitHub issues](https://img.shields.io/github/issues/thoschu/de.schulte360.npm.letter-count.svg)](https://github.com/thoschu/de.schulte360.npm.letter-count/issues)
[![GitHub license](https://img.shields.io/github/license/thoschu/de.schulte360.npm.letter-count.svg)](https://github.com/thoschu/de.schulte360.npm.letter-count/blob/master/LICENSE)

[![NPM Badge](https://nodei.co/npm/letter-count.png?downloads=true)](https://www.npmjs.com/package/letter-count)


<img src="https://www.thomas-schulte.de/images/letter-count.png" width="196" height="196" align="right" hspace="12" />

This is a calculator which counts the number of letters/ characters/ lines/ words/ numbers or wordsigns in a text, useful for your tweets on Twitter, as well as a multitude of other applications.

Whether it is Snapchat, Twitter, Facebook, Yelp or just a note to co-workers or business officials, the number of actual characters matters. What you say may not be as important as how you say it. And how many characters you use.

> The idea of this project arose during the development of a [game](//spiele.rtl.de/rtlspiele/stadt-land-fluss-2-8131.html) | [OpenAPI](http://ec2-52-28-208-185.eu-central-1.compute.amazonaws.com/swagger/), while my brother accompanied me for one day in the agency to register the incurrence of free improvised software. 
> So, this is a project that also has been started because of my interests in modelling digital logic and data.

## Installation

Via [npx](https://www.npmjs.com/package/npx):

```bash
$ npx letter-count "Hamburg - \nGermany 325!"
```

Via [yarn](https://yarnpkg.com/):

```bash
$ yarn add letter-count
```

Via [npm](https://www.npmjs.com/):

```bash
$ npm install letter-count
```

## Usage

[ECMAScript modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules):

```javascript
import { count, countFromFile, info } from 'letter-count';
```

[CommonJS modules](https://nodejs.org/docs/latest/api/modules.html#modules-commonjs-modules):

```javascript
const lc = require('letter-count');
```

## API

### 📍 count([option], value) `ECMAScript modules`:

```javascript
import { count } from 'letter-count';

const Log = console.log;

Log(count("Hamburg - \nGermany 137!")); 
//=> { 
//      origin: 'Hamburg - \nGermany 137!', 
//      chars: 23, 
//      lines: 2, 
//      words: 2, 
//      numbers: 3, 
//      option: '-a',
//      letters: 14, 
//      wordsigns: 2, 
//      hash: 'd559d4e0ad0770ec6940e6892a9c921b' 
//  }
```

### 📍 lc.count([option], value) `CommonJS modules`:

```javascript
const lc = require('letter-count');

const Log = console.log;

Log(lc.count("Hamburg - \nGermany 137!")); 
//=> { 
//      origin: 'Hamburg - \nGermany 137!', 
//      chars: 23, 
//      lines: 2, 
//      words: 2, 
//      numbers: 3, 
//      option: '-a',
//      letters: 14, 
//      wordsigns: 2, 
//      hash: 'd559d4e0ad0770ec6940e6892a9c921b' 
//  }
```

#### ➔ The optional `option` argument accepts a string with the following options:

##### Counts only the characters:
###### `-c` or `--chars` 
```javascript
// ECMAScript
count('-c', "Hamburg - \nGermany 137!");

// CommonJS
lc.count('--chars', "Hamburg - \nGermany 137!");

//=> { origin: 'Hamburg - \nGermany 137!', chars: 23 }
```

##### Counts only the lines:
###### `-ln` or `--lines` 
```javascript
// ECMAScript
count('-ln', "Hamburg - \nGermany 137!");

// CommonJS
lc.count('--lines', "Hamburg - \nGermany 137!"); 

//=> { origin: 'Hamburg - \nGermany 137!', lines: 2 }
```

##### Counts only the characters:
###### `-w` or `--words` 
```javascript
// ECMAScript
count('-w', "Hamburg - \nGermany 137!");

// CommonJS
lc.count('--words', "Hamburg - \nGermany 137!"); 

//=> { origin: 'Hamburg - \nGermany 137!', words: 2 }
```

##### Counts only the numbers:
###### `-n` or `--numbers` 
```javascript
// ECMAScript
count('-n', "Hamburg - \nGermany 137!");

// CommonJS
lc.count('--numbers', "Hamburg - \nGermany 137!"); 

//=> { origin: 'Hamburg - \nGermany 137!', numbers: 3 }
```

##### Counts only the letters:
###### `-l` or `--letters` 
```javascript
// ECMAScript
count('-l', "Hamburg - \nGermany 137!");

// CommonJS
lc.count('--letters', "Hamburg - \nGermany 137!"); 

//=> { origin: 'Hamburg - \nGermany 137!', letters: 14 }
```

##### MD5 hash:
###### `-hs` or `--hash` 
```javascript
// ECMAScript
count('-hs', "Hamburg - \nGermany 137!");

// CommonJS
lc.count('--hash', "Hamburg - \nGermany 137!"); 

//=> { origin: 'Hamburg - \nGermany 137!', hash: '6bee63bbc6c56f61fbfd19f1429ad4a3' }
```

##### Counts only the words sings:
###### `-ws` or `--wordsigns`
```javascript
// ECMAScript
count('-ws', "Hamburg - \nGermany 137!");

// CommonJS
lc.count('--wordsigns', "Hamburg - \nGermany 137!"); 

//=> { origin: 'Hamburg - \nGermany 137!', wordsigns: 2 }
```

### 📍 countFromFile([option], file) `ECMAScript modules`:
⚠ no Browser support ⚠
```javascript
import { countFromFile } from 'letter-count';

const Log = console.log;

Log(countFromFile('/path/to/file.txt')); 
//=> { 
//      origin: 'Hamburg - \nGermany 137!', 
//      chars: 23, 
//      lines: 2, 
//      words: 2, 
//      numbers: 3, 
//      option: '-a',
//      letters: 14,
//      wordsigns: 2, 
//      hash: 'd559d4e0ad0770ec6940e6892a9c921b' 
// }
```

### 📍 lc.countFromFile([option], file) `CommonJS module`: 
⚠ no Browser support ⚠

```javascript
const lc = require('letter-count');

const Log = console.log;

Log(lc.countFromFile('/path/to/file.txt')); 
//=> { 
//      origin: 'Hamburg - \nGermany 137!', 
//      chars: 23, 
//      lines: 2, 
//      words: 2, 
//      numbers: 3, 
//      option: '-a',
//      letters: 14,
//      wordsigns: 2, 
//      hash: 'd559d4e0ad0770ec6940e6892a9c921b' 
// }
```

#### ➔ The optional `option` argument accepts a string with the following options:

##### Counts only the characters:
###### `-c` or `--chars` 
```javascript
// ECMAScript
countFromFile('-c', '/path/to/file.txt');

// CommonJS
lc.countFromFile('--chars', '/path/to/file.txt'); 

//=> { origin: 'Hamburg - \nGermany 137!', chars: 23 }
```

#### Counts only the lines:
##### `-ln` or `--lines` 
```javascript
// ECMAScript
countFromFile('-ln', '/path/to/file.txt');

// CommonJS
lc.countFromFile('--lines', '/path/to/file.txt'); 

//=> { origin: 'Hamburg - \nGermany 137!', lines: 2 }
```

#### Counts only the words:
##### `-w` or `--words` 
```javascript
// ECMAScript
countFromFile('-w', '/path/to/file.txt');

// CommonJS
lc.countFromFile('--words', '/path/to/file.txt'); 

//=> { origin: 'Hamburg - \nGermany 137!', words: 2 }
```

#### Counts only the numbers:
##### `-n` or `--numbers` 
```javascript
// ECMAScript
countFromFile('-n', '/path/to/file.txt');

// CommonJS
lc.countFromFile('--numbers', '/path/to/file.txt');

//=> { origin: 'Hamburg - \nGermany 137!', numbers: 3 }
```

#### Counts only the letters:
##### `-l` or `--letters` 
```javascript
// ECMAScript
countFromFile('-l', '/path/to/file.txt');

// CommonJS
lc.countFromFile('--letters', '/path/to/file.txt'); 

//=> { origin: 'Hamburg - \nGermany 137!', letters: 14 }
```

#### Counts only the word signs:
##### `-ws` or `--wordsigns` 
```javascript
// ECMAScript
countFromFile('-ws', '/path/to/file.txt');

// CommonJS
lc.countFromFile('--wordsigns', '/path/to/file.txt'); 

//=> { origin: 'Hamburg - \nGermany 137!', wordsigns: 2 }
```

#### MD5 hash:
##### `-hs` or `--hash`
```javascript
// ECMAScript
countFromFile('-hs', '/path/to/file.txt');

// CommonJS
lc.countFromFile('--hash', '/path/to/file.txt'); 

//=> { origin: 'Hamburg - \nGermany 137!', hash: '6bee63bbc6c56f61fbfd19f1429ad4a3' }
```

### 📍 info([option]) `ECMAScript module`:
```javascript
import { info } from 'letter-count';

const Log = console.log;

Log(info()); 
//=>  { 
//      name: 'letter-count',
//      version: '0.0.1',
//      description: 'This is a calculator which counts the number of letters/ characters/ lines/ words/ numbers or wordsigns in a text, useful for your tweets on Twitter, as well as a multitude of other applications.',
//      author: { 
//          name: 'Tom S.', 
//          email: 'thoschulte@gmail.com' 
//      },
//      license: 'MIT' 
//  }
```

### 📍 lc.info([option]) `CommonJS module`:

```javascript
const lc = require('letter-count');

const Log = console.log;

Log(lc.info()); 
//=>  { 
//      name: 'letter-count',
//      version: '0.0.1',
//      description: 'This is a calculator which counts the number of letters/ characters/ lines/ words/ numbers or wordsigns in a text, useful for your tweets on Twitter, as well as a multitude of other applications.',
//      author: { 
//          name: 'Tom S.', 
//          email: 'thoschulte@gmail.com' 
//      },
//      license: 'MIT' 
//  }
```

## Using the `letter-count` binary

#### To use the `letter-count` binary in your shell, simply install letter-count globally using npm:

```bash
$ npx letter-count "Hamburg - \nGermany 325!"
```

```bash
$ npm install -g letter-count 
```

#### After that you’re able to count from the command line:
```bash
$ letter-count hamburg 
#=> 1 Jan 23:59:59 - hamburg : {"chars": "7", "hash": "f23bb5e2f7d35c767b40eddd42ac0e08", "letters": "7", "lines": "1", "numbers": "0", "options": "-a", "origin": "hamburg", "words": "1", "wordsigns": "0"}
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

##### To count only the words, use the the `-w`/`--words` option:
```bash
$ letter-count -hs tom
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

##### To count only the wordsigns, use the the `-ws`/`--wordsigns` option:
```bash
$ letter-count -hs hamburg
#=> 1 Jan 12:00:00 - germany! : {"hash": 1, "origin": "germany!"}
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

[![jsdoc logo](https://www.thomas-schulte.de/images/jsdoc.jpg "JSDoc")](https://techstack.ch/)

***

## RinKit

[https://npm.runkit.com/letter-count](https://npm.runkit.com/letter-count)

***

## Links

[Author](https://thomas-schulte.de)

[RTL - Games](https://spiele.rtl.de/)

[ShieldsIO](https://shields.io)

***

## License

***This library is available under the [MIT](https://mths.be/mit) license.***

---
