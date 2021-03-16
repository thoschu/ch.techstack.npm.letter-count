#!/usr/bin/env node

const Util = require('util'),
    Chalk = require('chalk'),
    R = require('ramda'),
    Lc = require('../lib/index');

const N = R.always(null);
const U = R.always(undefined);

(argumentsArr => {
    let lengthArgumentsArr = R.length(argumentsArr),
        resultObject = N(),
        result = N();

    if (R.equals(lengthArgumentsArr, 2)) {
        let label = R.concat(Chalk.red.bold(U()), ' : '),
            zero = R.always(0)();

        resultObject = {
            chars: zero,
            hash: zero,
            letters: zero,
            lines: zero,
            numbers: zero,
            option: U(),
            origin: U(),
            words: zero,
            wordsigns: zero
        };

        result = R.concat(label, R.toString(resultObject));
    } else {
        let cleanedArgumentsArr = R.drop(2, argumentsArr),
            firstElementOfArgumentsArr = R.nth(0, cleanedArgumentsArr),
            optionsElementOfArgumentsArr = R.nth(-1, cleanedArgumentsArr);

        if (R.equals(optionsElementOfArgumentsArr, firstElementOfArgumentsArr)) {
            let label = R.concat(Chalk.blue.bold(firstElementOfArgumentsArr), ' : '),
                countResultObject = Lc.count(firstElementOfArgumentsArr),
                chars = Chalk.green(countResultObject.chars),
                hash = Chalk.green(countResultObject.hash),
                letters = Chalk.green(countResultObject.letters),
                lines = Chalk.green(countResultObject.lines),
                numbers = Chalk.green(countResultObject.numbers),
                option = Chalk.green('-a'),
                origin = Chalk.green(firstElementOfArgumentsArr),
                words = Chalk.green(countResultObject.words),
                wordsigns = Chalk.green(countResultObject.wordsigns);

            resultObject = {
                chars,
                hash,
                letters,
                lines,
                numbers,
                option,
                origin,
                words,
                wordsigns
            };

            result = R.concat(label, R.toString(resultObject));
        } else {
            let option = cleanedArgumentsArr.shift(-1, 1),
                inputArr = R.clone(cleanedArgumentsArr),
                resultString = '';

            switch (option) {
                case '-a':
                case '--all':
                    option = '-a';
                    break;
                case '-c':
                case '--chars':
                    option = '-c';
                    break;
                case '-ln':
                case '--lines':
                    option = '-ln';
                    break;
                case '-w':
                case '--words':
                    option = '-w';
                    break;
                case '-n':
                case '--numbers':
                    option = '-n';
                    break;
                case '-l':
                case '--letters':
                    option = '-l';
                    break;
                case '-ws':
                case '--wordsigns':
                    option = '-ws';
                    break;
                case '-f':
                case '--file':
                    option = '-f';
                    break;
                case '-hs':
                case '--hash':
                    option = '-hs';
                    break;
                default:
                    option = '-a';
            }

            let lastElementOfInputArr = R.last(inputArr),
                whiteSpace = ' ';

            R.forEach(x => {
                let tempStr = N();

                if (R.equals(x, lastElementOfInputArr)) {
                    tempStr = x;
                } else {
                    tempStr = R.concat(x, whiteSpace);
                }

                resultString = R.concat(resultString, tempStr);
            }, inputArr);

            let chalkedResultString = Chalk.blue.bold(resultString),
                label = R.concat(chalkedResultString, ' : '),
                resultObject = N();

            if(R.equals(option, '-f')) {
                resultObject = Lc.countFromFile(option, resultString);
            } else {
                resultObject = Lc.count(option, resultString);
            }

            resultObject = {
                chars: Chalk.green(resultObject.chars),
                hash: Chalk.green(resultObject.hash),
                letters: Chalk.green(resultObject.letters),
                lines: Chalk.green(resultObject.lines),
                numbers: Chalk.green(resultObject.numbers),
                option: Chalk.green(option),
                origin: Chalk.green(resultObject.origin),
                words: Chalk.green(resultObject.words),
                wordsigns: Chalk.green(resultObject.wordsigns)
            };

            result = R.concat(label, R.toString(resultObject));
        }
    }

    Util.log(result);
})(R.prop('argv', process));
