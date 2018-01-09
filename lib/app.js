/**
 * letter-count module.
 * @module lib/letter-count
 */

const R = require('ramda');

exports.count = function (input) {
    let chars = R.length(input),
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
        wordsigns = R.length(filtered);

    return {
        chars,
        lines,
        words,
        numbers,
        letters,
        wordsigns
    };
};