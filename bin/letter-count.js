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
            let cleanedCleanedArgumentsArr = R.drop(1, cleanedArgumentsArr),
                resultString = '';

            R.forEach(x => {
                let tempStr = R.concat(x, ' ');
                resultString = R.concat(resultString, tempStr);
            }, cleanedCleanedArgumentsArr);

            let label = R.concat(Chalk.blue.bold(resultString), ' : '),
                countResultObject = Lc.count(resultString),
                chars = Chalk.green(countResultObject.chars),
                letters = Chalk.green(countResultObject.letters),
                lines = Chalk.green(countResultObject.lines),
                words = Chalk.green(countResultObject.words),
                wordsigns = Chalk.green(countResultObject.wordsigns);

            // switch(expression) {
            //     case n:
            //         code block
            //         break;
            //     case n:
            //         code block
            //         break;
            //     default:
            //         code block
            // }

            resultObject = {
                chars: chars,
                letters: letters,
                lines: lines,
                words: words,
                wordsigns: wordsigns
            };

            result = R.concat(label, R.toString(resultObject));

            console.log(resultString);
        }
    }

    Util.log(result);
})(R.prop('argv', process));