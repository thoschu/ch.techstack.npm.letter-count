/**
 * Module dependencies.
 */
const R = require('ramda');

/**
 * letter-count module.
 * @module lib/app.js
 */
exports.count = function (input, options = '--all') {
    let origin = R.clone(input),
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
        replacedSpace = R.replace(/[\t \n]/g, '', replacedLetters),
        splitted = R.split('', replacedSpace),
        filtered = R.filter(n => R.not(R.isEmpty(n)), splitted),
        wordsigns = R.length(filtered),
        returnObject = null;

    switch (options) {
        case '-c':
        case '--chars':
            returnObject = {
                origin,
                chars
            };
            break;
        case '-ln':
        case '--lines':
            returnObject = {
                origin,
                lines
            };
            break;
        case '-w':
        case '--words':
            returnObject = {
                origin,
                words
            };
            break;
        case '-n':
        case '--numbers':
            returnObject = {
                origin,
                numbers
            };
            break;
        case '-l':
        case '--letters':
            returnObject = {
                origin,
                letters
            };
            break;
        case '-ws':
        case '--wordsigns':
            returnObject = {
                origin,
                wordsigns
            };
            break;
        default: // '-a' || '--all'
            returnObject = {
                origin,
                chars,
                lines,
                words,
                numbers,
                letters,
                wordsigns
            };
    }

    return returnObject;
};