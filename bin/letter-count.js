#!/usr/bin/env node

const Util = require('util'),
    Chalk = require('chalk'),
    R = require('ramda'),
    Lc = require('../lib/app.js');

(function (argumentsArr) {
    let lengthArgumentsArr = R.length(argumentsArr),
        resultObject = null,
        result = null;

    if (R.equals(lengthArgumentsArr, 2)) {
        let label = R.concat(Chalk.red.bold(undefined), ' : '),
            zero = R.always(0);

        resultObject = {
            chars: zero(),
            elements: zero(),
            letters: zero(),
            lines: zero(),
            words: zero(),
            wordsigns: zero()
        };

        result = R.concat(label, R.toString(resultObject));
    } else {
        let cleanedArgumentsArr = R.drop(2, argumentsArr),
            optionsArr = R.nth(0, cleanedArgumentsArr),
            lastElementOfArgumentsArr = R.nth(-1, cleanedArgumentsArr);

        if (R.equals(optionsArr, lastElementOfArgumentsArr)) {
            let label = R.concat(Chalk.blue.bold(lastElementOfArgumentsArr), ' : '),
                countResultObject = Lc.count(lastElementOfArgumentsArr),
                chars = Chalk.green(countResultObject.chars),
                letters = Chalk.green(countResultObject.letters),
                lines = Chalk.green(countResultObject.lines),
                words = Chalk.green(countResultObject.words),
                wordsigns = Chalk.green(countResultObject.wordsigns);

            resultObject = {
                chars: chars,
                letters: letters,
                lines: lines,
                words: words,
                wordsigns: wordsigns
            };

            result = R.concat(label, R.toString(resultObject));
        } else {
            let option = R.nth(0, cleanedArgumentsArr),
                inputArr = R.drop(1, cleanedArgumentsArr),
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
                default:
                    inputArr = R.prepend(option, inputArr);
                    option = '-a';
            }

            let lastElementOfInputArr = R.last(inputArr);

            R.forEach(x => {
                let tempStr = null;

                if (R.equals(x, lastElementOfInputArr)) {
                    tempStr = x;
                } else {
                    tempStr = R.concat(x, ' ');
                }

                resultString = R.concat(resultString, tempStr);
            }, inputArr);


            let label = R.concat(Chalk.blue.bold(resultString), ' : '),
                resultObject = null;

            if(R.equals(option, '-f')) {
                resultObject = Lc.countFromFile(resultString, option);
            } else {
                resultObject = Lc.count(resultString, option);
            }

            result = R.concat(label, R.toString(resultObject));
        }
    }

    Util.log(result);
})(R.prop('argv', process));