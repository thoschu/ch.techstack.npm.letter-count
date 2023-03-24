const Fs = require('fs'),
    Process = require('process'),
    Path = require('path'),
    R = require('ramda'),
    Md5 = require('md5');

module.exports = {
    count: (input, option) => {
        let origin = R.clone(input),
            hash = Md5(input),
            chars = R.length(input),
            inputSplited = R.split('\n', input),
            lines = R.length(inputSplited),
            trimmed = R.trim(input),
            replacedWithoutNumbers = R.replace(/\d/g, '', trimmed),
            replacedWithoutNumbersAndSigns = R.replace(/\W/g, ' ', replacedWithoutNumbers),
            replacedWithoutCharacter = R.replace(/\D/g, '', trimmed),
            floatMatches = trimmed.match(/[-+]?([0-9]*\.[0-9]+([eE][-+]?[0-9]+)?)/g) ?? [],
            floats = R.length(floatMatches),
            integerMatches = trimmed.match(/(?<![\d.,-])(-?\d+)(?![\d.,-])/g) ?? [],
            integers = R.length(integerMatches),
            spacesMatches = origin.match(/\s/g),
            spaces = R.length(spacesMatches),
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

        switch (option) {
            case '-c':
            case '--chars':
                returnObject = R.mergeRight(returnObject, {
                    chars
                }); break;
            case '-ln':
            case '--lines':
                returnObject = R.mergeRight(returnObject, {
                    lines
                }); break;
            case '-w':
            case '--words':
                returnObject = R.mergeRight(returnObject, {
                    words
                }); break;
            case '-n':
            case '--numbers':
                returnObject = R.mergeRight(returnObject, {
                    numbers
                }); break;
            case '-int':
            case '--integers':
                returnObject = R.mergeRight(returnObject, {
                    integers
                }); break;
            case '-fl':
            case '--floats':
                returnObject = R.mergeRight(returnObject, {
                    floats
                }); break;
            case '-l':
            case '--letters':
                returnObject = R.mergeRight(returnObject, {
                    letters
                }); break;
            case '-s':
            case '--spaces':
                returnObject = R.mergeRight(returnObject, {
                    spaces
                }); break;
            case '-ws':
            case '--wordsigns':
                returnObject = R.mergeRight(returnObject, {
                    wordsigns
                }); break;
            case '-hs':
            case '--hash':
                returnObject = R.mergeRight(returnObject, {
                    hash
                }); break;
            default: // '-a' || '--all'
                returnObject = R.mergeRight(returnObject, {
                    chars,
                    hash,
                    lines,
                    letters,
                    numbers,
                    integers,
                    floats,
                    spaces,
                    words,
                    wordsigns,
                    origin,
                    option: '-a',
                });
        }

        return returnObject;
    },
    info: (key) => {
        const hasCwd = R.has('cwd');
        let returnValue = null;

        if(hasCwd(Process)) {
            let dir = process.cwd(),
                sep = R.prop('sep', Path),
                fileName = 'package.json',
                dirAndSep = R.concat(dir, sep),
                pathToPackageDotJson = R.concat(dirAndSep, fileName),
                encoding = 'utf8',
                packageDonJson = Fs.readFileSync(pathToPackageDotJson, encoding),
                tempJSON = JSON.parse(packageDonJson),
                returnObject = R.mergeRight({}, {'name': R.prop('name', tempJSON)});

            returnObject = R.mergeRight(returnObject, {'version': R.prop('version', tempJSON)});
            returnObject = R.mergeRight(returnObject, {'description': R.prop('description', tempJSON)});
            returnObject = R.mergeRight(returnObject, {'author': R.prop('author', tempJSON)});
            returnObject = R.mergeRight(returnObject, {'license': R.prop('license', tempJSON)});

            returnValue = key ? R.pick([key], returnObject) : returnObject;
        } else {
            if(navigator) {
                returnValue = {'letter-count': `info() > Platform not supportet: ${navigator.userAgent}`};
            } else {
                returnValue = {'letter-count': `info() > Platform not supportet.`};
            }
        }

        return returnValue;
    }
};
