/**
 * Module dependencies.
 */
const Fs = require('fs'),
    Path = require('path'),
    R = require('ramda'),
    Md5 = require('md5');

let fn = (options, input) => {
        let origin = R.clone(input),
            hash = Md5(input),
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
            returnObject = {
                origin
        };

        switch (options) {
            case '-c':
            case '--chars':
                returnObject = R.merge(returnObject, {
                    chars
                }); break;
            case '-ln':
            case '--lines':
                returnObject = R.merge(returnObject, {
                    lines
                }); break;
            case '-w':
            case '--words':
                returnObject = R.merge(returnObject, {
                    words
                }); break;
            case '-n':
            case '--numbers':
                returnObject = R.merge(returnObject, {
                    numbers
                }); break;
            case '-l':
            case '--letters':
                returnObject = R.merge(returnObject, {
                    letters
                }); break;
            case '-ws':
            case '--wordsigns':
                returnObject = R.merge(returnObject, {
                    wordsigns
                }); break;
            default: // '-a' || '--all'
                returnObject = R.merge(returnObject, {
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
 * letter-count.js module.
 * @module lib/app.js
 */
module.exports = {
    count: (input, options = '--all') => {
        return fn(options, input);
    },
    countFromFile: (file, options = '--all') => {
        let returnValue = null;

        try {
            let content = Fs.readFileSync(file),
                input = content.toString();

            returnValue = fn(options, input);
        } catch (err) {
            returnValue = {
                info: 'file does not exist'
            };
        } finally {
            return returnValue;
        }
    },
    info: (options = '-x') => {
        let dir = process.cwd(),
            sep = R.prop('sep', Path),
            fileName = 'package.json',
            dirAndSep = R.concat(dir, sep),
            pathToPackageDotJson = R.concat(dirAndSep, fileName),
            encoding = 'utf8',
            packageDonJson = Fs.readFileSync(pathToPackageDotJson, encoding),
            tempJSON = JSON.parse(packageDonJson),
            returnValue = null;

        switch (options) {
            case '-n':
            case '--name':
                returnValue = R.prop('name', tempJSON);
                break;
            case '-v':
            case '--version':
                returnValue = R.prop('version', tempJSON);
                break;
            case '-d':
            case '--description':
                returnValue = R.prop('description', tempJSON);
                break;
            case '-a':
            case '--author':
                returnValue = R.prop('author', tempJSON);
                break;
            case '-l':
            case '--license':
                returnValue = R.prop('license', tempJSON);
                break;
            default:
                let returnObject = {};
                returnObject = R.merge(returnObject, { 'name': R.prop('name', tempJSON) });
                returnObject = R.merge(returnObject, { 'version': R.prop('version', tempJSON) });
                returnObject = R.merge(returnObject, { 'description': R.prop('description', tempJSON) });
                returnObject = R.merge(returnObject, { 'author': R.prop('author', tempJSON) });
                returnObject = R.merge(returnObject, { 'license': R.prop('license', tempJSON) });
                returnValue = returnObject;
        }

        return returnValue;
    }
};