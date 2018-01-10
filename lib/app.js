/**
 * Module dependencies.
 */
const FS = require('fs'),
    R = require('ramda'),
    MD5 = require('md5');

let xxx = (obj) => {
        return obj;
    },
    count = (options, input) => {
        let origin = R.clone(input),
            hash = MD5(input),
            chars = R.length(input),
            inputSplited = R.split('\n', input),
            lines = R.length(inputSplited),
            trimmed = R.trim(input),
            replacedWithoutNumbers = R.replace(/\d/g, '', trimmed),
            replacedWithoutNumbersAndSigns = R.replace(/\W/g, ' ', replacedWithoutNumbers),
            replacedWithoutCharacter = R.replace(/\D/g, '', trimmed),
            splittedArr = R.split(/[\t \n]/, replacedWithoutNumbersAndSigns),
            filteredArr = R.filter(n => R.not(R.isEmpty(n)), splittedArr),
            numbers = R.length(replacedWithoutCharacter),
            words = R.length(filteredArr),
            replacedSign = R.replace(/\W/g, '', replacedWithoutNumbers),
            letters = R.length(replacedSign),
            replacedLetters = R.replace(/\w/g, '', replacedWithoutNumbers),
            replacedSpace = R.replace(/[\t \n \r]/g, '', replacedLetters),
            splitted = R.split('', replacedSpace),
            filtered = R.filter(n => R.not(R.isEmpty(n)), splitted),
            wordsigns = R.length(filtered),
            returnObject = {};

        switch (options) {
            case '-c':
            case '--chars':
                returnObject = R.merge(returnObject, {
                    origin,
                    chars
                });
                break;
            case '-ln':
            case '--lines':
                returnObject = R.merge(returnObject, {
                    origin,
                    lines
                });
                break;
            case '-w':
            case '--words':
                returnObject = R.merge(returnObject, {
                    origin,
                    words
                });
                break;
            case '-n':
            case '--numbers':
                returnObject = R.merge(returnObject, {
                    origin,
                    numbers
                });
                break;
            case '-l':
            case '--letters':
                returnObject = R.merge(returnObject, {
                    origin,
                    letters
                });
                break;
            case '-ws':
            case '--wordsigns':
                returnObject = R.merge(returnObject, {
                    origin,
                    wordsigns
                });
                break;
            default: // '-a' || '--all'
                returnObject = R.merge(returnObject, {
                    origin,
                    chars,
                    lines,
                    words,
                    numbers,
                    letters,
                    wordsigns,
                    hash
                });
        }

        return returnObject;
    };

/**
 * letter-count module.
 * @module lib/app.js
 */
module.exports = {
    count: (input, options = '--all') => {
        return count(options, input);
    },
    countFromFile: (file, options = '--all') => {
        let content = FS.readFileSync(file),
            input = content.toString();
        return count(options, input);
    }
};