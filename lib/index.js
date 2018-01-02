const Util = require('util'),
    R = require('ramda');

//Util.log(Util.format('Module: %s loaded.', module.id));

exports.letterCount = function (sentence) {
    let trimmed = R.trim(sentence),
        replaced = R.replace(/\s/g, '', trimmed);

    replaced = R.replace(/\W/g, '', replaced);

    let wordArr = R.splitEvery(1, replaced);
    return R.length(wordArr);
};