#!/usr/bin/env node

const Util = require('util'),
    Chalk = require('chalk'),
    R = require('ramda');

const Lc = require('../lib/index');

const N = R.always(null);

(argumentsArr => {
    let lengthArgumentsArr = R.length(argumentsArr),
        resultObject = N(),
        result = N();

    if (R.equals(lengthArgumentsArr, 2)) {
        let label = R.concat(Chalk.red.bold(undefined), ' : '),
            zero = R.always(0)();

        resultObject = {
            chars: zero,
            hash: zero,
            letters: zero,
            lines: zero,
            numbers: zero,
            options: undefined,
            origin: undefined,
            words: zero,
            wordsigns: zero
        };

        result = R.concat(label, R.toString(resultObject));
    } else {
        let cleanedArgumentsArr = R.drop(2, argumentsArr),
            firstElementOfArgumentsArr = R.nth(0, cleanedArgumentsArr),
            optionsElementOfArgumentsArr = R.nth(-1, cleanedArgumentsArr);

        console.log(cleanedArgumentsArr);
        console.log(firstElementOfArgumentsArr);
        console.log(optionsElementOfArgumentsArr);
        console.log(R.equals(optionsElementOfArgumentsArr, firstElementOfArgumentsArr))
        console.log('-------------------------------')

        if (R.equals(optionsElementOfArgumentsArr, firstElementOfArgumentsArr)) {
            let label = R.concat(Chalk.blue.bold(firstElementOfArgumentsArr), ' : '),
                countResultObject = Lc.count(firstElementOfArgumentsArr),
                chars = Chalk.green(countResultObject.chars),
                hash = Chalk.green(countResultObject.hash),
                letters = Chalk.green(countResultObject.letters),
                lines = Chalk.green(countResultObject.lines),
                numbers = Chalk.green(countResultObject.numbers),
                options = Chalk.green('--all'),
                origin = Chalk.green(firstElementOfArgumentsArr),
                words = Chalk.green(countResultObject.words),
                wordsigns = Chalk.green(countResultObject.wordsigns);

            resultObject = {
                chars,
                hash,
                letters,
                lines,
                numbers,
                options,
                origin,
                words,
                wordsigns
            };

            result = R.concat(label, R.toString(resultObject));
        } else {
            let option = cleanedArgumentsArr.shift(-1, 1),
                inputArr = R.clone(cleanedArgumentsArr),
                resultString = '';

            console.log(inputArr);
            console.log(option);
            console.log('+++++++++++++++++++++++++++++++++++++')

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

            console.log(option);
            console.log(inputArr);

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

            console.log(resultString);

            let chalkedResultString = Chalk.blue.bold(resultString),
                label = R.concat(chalkedResultString, ' : '),
                resultObject = N();

            if(R.equals(option, '-f')) {
                resultObject = Lc.countFromFile(option, resultString);
            } else {
                resultObject = Lc.count(option, resultString);
            }

            console.log(resultObject)

            result = R.concat(label, R.toString(resultObject));
        }
    }

    Util.log(result);
})(R.prop('argv', process));
