#!/usr/bin/env node

const Chalk = require('chalk'),
    R = require('ramda'),
    Lc = require('../lib/index');

(argumentsArr => {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale,
        date = new Date(),
        localeStr = date.toLocaleString(locale, {
            hour12: false,
            day: "2-digit",
            hour: "2-digit",
            minute: '2-digit',
            second: "2-digit",
            month: "long",
            year: "numeric",
        });

    try {
        let lengthArgumentsArr = R.length(argumentsArr),
            resultObject = null,
            result;

        if (R.equals(lengthArgumentsArr, 2)) {
            let label = R.concat(Chalk.red.bold(undefined), ' : '),
                zero = R.always(0)();

            resultObject = {
                chars: zero,
                hash: zero,
                letters: zero,
                lines: zero,
                numbers: zero,
                option: undefined,
                origin: undefined,
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
                    integers = Chalk.green(countResultObject.integers),
                    floats = Chalk.green(countResultObject.floats),
                    spaces = Chalk.green(countResultObject.spaces),
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
                    integers,
                    floats,
                    spaces,
                    words,
                    wordsigns,
                    option,
                    origin,
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
                    case '-int':
                    case '--integers':
                        option = '-int';
                        break;
                    case '-fl':
                    case '--floats':
                        option = '-fl';
                        break;
                    case '-l':
                    case '--letters':
                        option = '-l';
                        break;
                    case '-s':
                    case '--spaces':
                        option = '-s';
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
                    let tempStr;

                    if (R.equals(x, lastElementOfInputArr)) {
                        tempStr = x;
                    } else {
                        tempStr = R.concat(x, whiteSpace);
                    }

                    resultString = R.concat(resultString, tempStr);
                }, inputArr);

                let chalkedResultString = Chalk.blue.bold(resultString),
                    label = R.concat(chalkedResultString, ' : '),
                    resultObject;

                if(R.equals(option, '-f')) {
                    resultObject = Lc.countFromFile(resultString, option);
                } else {
                    resultObject = Lc.count(resultString, option);
                }

                result = R.concat(label, R.toString(R.map(x => Chalk.green(x), resultObject)));
            }
        }

        process.stdout.write(`${localeStr} - ${result}`);
    } catch(err) {
        process.stderr.write(err);
    }
})(R.prop('argv', process));
