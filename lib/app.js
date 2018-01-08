const R = require('ramda');

/**
 * letter-count module.
 * @module helper/letter-count
 */

/** Count the letter. */

exports.count = function (input) {
    let chars = R.length(input),
        splitedAtNewLine = R.split('\n', input),
        lines = R.length(splitedAtNewLine),
        trimmed = R.trim(input),

        //replaced = R.replace(/\d/g, '', trimmed),

        splitedArr = R.split(/[\t \n]/, trimmed),
        filteredArr = R.filter(n => R.not(R.isEmpty(n)), splitedArr),
        elements = R.length(filteredArr),

        replacedSign = R.replace(/\W/g, '', trimmed),
        letters = R.length(replacedSign),

        replacedLetters = R.replace(/\w/g, '', trimmed),
        wordsigns = R.length(replacedLetters);
    //replaced = R.replace(/\D/g, '', replaced);

    //console.log(R.replace(/\D/g, '', input));
    // console.log('#####');
    // console.log(elements);
    // console.log('*****');

    //let wordArr = R.splitEvery(1, replaced);replaced = R.replace(/\s/g, '', trimmed),

    //console.log(input);

    return {
        chars,
        lines,
        elements,
        letters,
        wordsigns
    };
};

