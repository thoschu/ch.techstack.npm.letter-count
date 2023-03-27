# letter-count

[![npm version](https://badge.fury.io/js/letter-count.svg)](https://badge.fury.io/js/letter-count)
[![Build Status](https://app.travis-ci.com/thoschu/ch.techstack.npm.letter-count.svg?branch=master)](https://app.travis-ci.com/github/thoschu/ch.techstack.npm.letter-count)
[![Known Vulnerabilities](https://snyk.io/test/github/thoschu/ch.techstack.npm.letter-count/badge.svg)](https://snyk.io/test/github/thoschu/ch.techstack.npm.letter-count)
[![GitHub issues](https://img.shields.io/github/issues/thoschu/ch.techstack.npm.letter-count.svg)](https://github.com/thoschu/ch.techstack.npm.letter-count/issues)
[![GitHub license](https://img.shields.io/github/license/thoschu/ch.techstack.npm.letter-count.svg)](https://github.com/thoschu/ch.techstack.npm.letter-count/blob/master/LICENSE)

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

$ npx letter-count -int "Hamburg - \nGermany 325!"
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

### 📍 count(value, [option]) `ECMAScript modules`:

```javascript
import { count } from 'letter-count';

const Log = console.log;

Log(count('Hamburg - \nGermany 137!')); 
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

### 📍 lc.count(value, [option]) `CommonJS modules`:

```javascript
const lc = require('letter-count');

const Log = console.log;

Log(lc.count('Hamburg - \nGermany 137!')); 
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
count('Hamburg - \nGermany 137!', '-c');

// CommonJS
lc.count('Hamburg - \nGermany 137!', '--chars');

//=> { origin: 'Hamburg - \nGermany 137!', chars: 23 }
```

##### Counts only the lines:
###### `-ln` or `--lines` 
```javascript
// ECMAScript
count('Hamburg - \nGermany 137!', '-ln');

// CommonJS
lc.count('Hamburg - \nGermany 137!', '--lines'); 

//=> { origin: 'Hamburg - \nGermany 137!', lines: 2 }
```

##### Counts only the words:
###### `-w` or `--words` 
```javascript
// ECMAScript
count('Hamburg - \nGermany 137!', '-w');

// CommonJS
lc.count('Hamburg - \nGermany 137!', '--words'); 

//=> { origin: 'Hamburg - \nGermany 137!', words: 2 }
```

##### Counts only the numbers:
###### `-n` or `--numbers` 
```javascript
// ECMAScript
count('Hamburg - \nGermany 137!', '-n');

// CommonJS
lc.count('Hamburg - \nGermany 137!', '--numbers'); 

//=> { origin: 'Hamburg - \nGermany 137!', numbers: 3 }
```

##### Counts only the integers:
###### `-int` or `--integers`
```javascript
// ECMAScript
count('Hamburg - \nGermany 137!', '-int');

// CommonJS
lc.count('Hamburg - \nGermany 137!', '--integers'); 

//=> { origin: 'Hamburg - \nGermany 137!', integers: 1 }
```

##### Counts only the floats:
###### `-fl` or `--floats`
```javascript
// ECMAScript
count('Hamburg - \nGermany 13.7!', '-fl');

// CommonJS
lc.count('Hamburg - \nGermany 13.7!', '--floats'); 

//=> { origin: 'Hamburg - \nGermany 137!', floats: 1 }
```

##### Counts only the spaces:
###### `-s` or `--spaces`
```javascript
// ECMAScript
count('Hamburg - \nGermany 13 7!', '-s');

// CommonJS
lc.count('Hamburg - \nGermany 13 7!', '--spaces'); 

//=> { origin: 'Hamburg - \nGermany 13 7!', spaces: 4 }
```

##### Counts only the letters:
###### `-l` or `--letters` 
```javascript
// ECMAScript
count('Hamburg - \nGermany 137!', '-l');

// CommonJS
lc.count('Hamburg - \nGermany 137!', '--letters'); 

//=> { origin: 'Hamburg - \nGermany 137!', letters: 14 }
```

##### MD5 hash:
###### `-hs` or `--hash` 
```javascript
// ECMAScript
count('Hamburg - \nGermany 137!', '-hs');

// CommonJS
lc.count('Hamburg - \nGermany 137!', '--hash'); 

//=> { origin: 'Hamburg - \nGermany 137!', hash: '6bee63bbc6c56f61fbfd19f1429ad4a3' }
```

##### Counts only the words sings:
###### `-ws` or `--wordsigns`
```javascript
// ECMAScript
count('Hamburg - \nGermany 137!', '-ws');

// CommonJS
lc.count('Hamburg - \nGermany 137!', '--wordsigns'); 

//=> { origin: 'Hamburg - \nGermany 137!', wordsigns: 2 }
```

### 📍 countFromFile(file, [option]) `ECMAScript modules`:
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

### 📍 lc.countFromFile(file, [option]) `CommonJS module`: 
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
countFromFile('/path/to/file.txt', '-c');

// CommonJS
lc.countFromFile('/path/to/file.txt', '--chars'); 

//=> { origin: 'Hamburg - \nGermany 137!', chars: 23 }
```

#### Counts only the lines:
##### `-ln` or `--lines` 
```javascript
// ECMAScript
countFromFile('/path/to/file.txt', '-ln');

// CommonJS
lc.countFromFile('/path/to/file.txt', '--lines'); 

//=> { origin: 'Hamburg - \nGermany 137!', lines: 2 }
```

#### Counts only the words:
##### `-w` or `--words` 
```javascript
// ECMAScript
countFromFile('/path/to/file.txt', '-w');

// CommonJS
lc.countFromFile('/path/to/file.txt', '--words'); 

//=> { origin: 'Hamburg - \nGermany 137!', words: 2 }
```

#### Counts only the numbers:
##### `-n` or `--numbers` 
```javascript
// ECMAScript
countFromFile('/path/to/file.txt', '-n');

// CommonJS
lc.countFromFile('/path/to/file.txt', '--numbers');

//=> { origin: 'Hamburg - \nGermany 137!', numbers: 3 }
```

#### Counts only the integers:
##### `-int` or `--integers`
```javascript
// ECMAScript
countFromFile('/path/to/file.txt', '-int');

// CommonJS
lc.countFromFile('/path/to/file.txt', '--integers');

//=> { origin: 'Hamburg - \nGermany 137!', integers: 1 }
```

#### Counts only the floats:
##### `-fl` or `--floats`
```javascript
// ECMAScript
countFromFile('/path/to/file.txt', '-fl');

// CommonJS
lc.countFromFile('/path/to/file.txt', '--floats');

//=> { origin: 'Hamburg - \nGermany 13.7!', floats: 1 }
```

#### Counts only the spaces:
##### `-s` or `--spaces`
```javascript
// ECMAScript
countFromFile('/path/to/file.txt', '-s');

// CommonJS
lc.countFromFile('/path/to/file.txt', '--spaces');

//=> { origin: 'Hamburg - \nGermany 13 7!', spaces: 4 }
```

#### Counts only the letters:
##### `-l` or `--letters` 
```javascript
// ECMAScript
countFromFile('/path/to/file.txt', '-l');

// CommonJS
lc.countFromFile('/path/to/file.txt', '--letters'); 

//=> { origin: 'Hamburg - \nGermany 137!', letters: 14 }
```

#### Counts only the word signs:
##### `-ws` or `--wordsigns` 
```javascript
// ECMAScript
countFromFile('/path/to/file.txt', '-ws');

// CommonJS
lc.countFromFile('/path/to/file.txt', '--wordsigns'); 

//=> { origin: 'Hamburg - \nGermany 137!', wordsigns: 2 }
```

#### MD5 hash:
##### `-hs` or `--hash`
```javascript
// ECMAScript
countFromFile('/path/to/file.txt', '-hs');

// CommonJS
lc.countFromFile('/path/to/file.txt', '--hash'); 

//=> { origin: 'Hamburg - \nGermany 137!', hash: '6bee63bbc6c56f61fbfd19f1429ad4a3' }
```

### 📍 info([key]) `ECMAScript module`:
⚠ no Browser support ⚠
```javascript
import { info } from 'letter-count';

const Log = console.log;

Log(info('author')); 
//=>  {
//      author: { 
//          name: 'Tom S.', 
//          email: 'thoschulte@gmail.com' 
//      }
//  }
```

### 📍 lc.info([key]) `CommonJS module`:
⚠ no Browser support ⚠
```javascript
const lc = require('letter-count');

const Log = console.log;

Log(lc.info()); 
//=>  { 
//      name: 'letter-count',
//      version: '5.0.0',
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
$ npx letter-count [option] "Hamburg - \nGermany 325!"
```

```bash
$ npm install -g letter-count 
```

#### After that you’re able to count from the command line:
```bash
$ letter-count hamburg 
#=> July 13, 2023 at 12:00:00 - hamburg : {"chars": "7", "hash": "f23bb5e2f7d35c767b40eddd42ac0e08", "letters": "7", "lines": "1", "numbers": "0", "option": "-a", "origin": "hamburg", "words": "1", "wordsigns": "0"}
```

##### To count only the character, use the `-c`/`--char` option:
```bash
$ letter-count -c hamburg 
#=> July 13, 2023 at 12:00:00 - hamburg : {"chars": "7", "origin": "hamburg"}
```

##### To count only the lines, use the `-ln`/`--lines` option:
```bash
$ letter-count -ln tom s. 
#=> July 13, 2023 at 12:00:00 - tom s. : {"lines": "1", "origin": "tom s."}
```

##### To count only the words, use the `-w`/`--words` option:
```bash
$ letter-count -w tom hamburg 
#=> July 13, 2023 at 12:00:00 - tom hamburg : {"origin": "tom hamburg", "words": "2"}
```

##### To count only the numbers, use the `-n`/`--numbers` option:
```bash
$ letter-count -n hamburg 20097
#=> July 13, 2023 at 12:00:00 - hamburg 20097 : {"numbers": "5", "origin": "hamburg 20097"}
```

##### To count only the integers, use the `-int`/`--integers` option:
```bash
$ letter-count -int hamburg 20097
#=> July 13, 2023 at 12:00:00 - hamburg 20097 : {"integers": "1", "origin": "hamburg 20097"}
```

##### To count only the floats, use the `-fl`/`--floats` option:
```bash
$ letter-count -fl hamburg 13.7
#=> July 13, 2023 at 12:00:00 - hamburg 13.7 : {"floats": "1", "origin": "hamburg 13.7"}
```

##### To count only the spaces, use the `-s`/`--spaces` option:
```bash
$ letter-count -s hamburg tom npm
#=> July 13, 2023 at 12:00:00 - hamburg tom npm : {"spaces": "2", "origin": "hamburg tom npm"}
```

##### To count only the letters, use the `-l`/`--letters` option:
```bash
$ letter-count -l tom 13 hh
#=> July 13, 2023 at 12:00:00 - tom 13 hh : {"letters": "5", "origin": "tom 13 hh"}
```

##### To count only the wordsigns, use the `-ws`/`--wordsigns` option:
```bash
$ letter-count -ws germany!
#=> July 13, 2023 at 12:00:00 - germany! : {"origin": "germany!", "wordsigns": "1"}
```

##### To generate a hash (MD5), use the `-hs`/`--hash` option:
```bash
$ letter-count -hs hamburg
#=> July 13, 2023 at 12:00:00 - hamburg : {"hash": "f23bb5e2f7d35c767b40eddd42ac0e08", "origin": "hamburg"}
```

##### To count in a file, use the `-f`/`--file` option and the path to the file:
```bash
$ letter-count -f path/to/file/input.txt
#=> July 13, 2023 at 12:00:00 - path/to/file/input.txt : {"chars": "11", "hash": "374b094aaccf1fa849642a2de03d6dbe", "letters": "9", "lines": "2", "numbers": "0", "option": "-a", "origin": "foo\nbar baz", "words": "3", "wordsigns": "0"}
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

[Author](//thomas-schulte.de/disclaimer.html)

[RTL - Games](//spiele.rtl.de/rtlspiele/stadt-land-fluss-2-8131.html)

[letter-count for Angular](//www.npmjs.com/package/ng-letter-count-2)

[ShieldsIO](//shields.io)

***

## License

***This library is available under the [MIT](https://mths.be/mit) license.***

---
