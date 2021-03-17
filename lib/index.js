/**
 * Module dependencies.
 */
const Fs = require('fs'),
    R = require('ramda'),
    tasks = require('./tasks');

/**
 * letter-count.js module.
 * @module lib/index.js
 */
module.exports = {
    count: (option, input) => {
        if (input === undefined && option === undefined) {
            const zero = R.always(0)(),
                resultObject = {
                    chars: zero,
                    hash: zero,
                    letters: zero,
                    lines: zero,
                    numbers: zero,
                    option: undefined,
                    origin: undefined,
                    words: zero,
                    wordsigns: zero,
                    emoji: Emoji.random().emoji
                };

            return resultObject;
        } else if (input === undefined) {
            input = option;
            option = '-a'
        }

        return tasks.count(option, input);
    },
    countFromFile: (options, file) => {
        let returnValue = null;

        if (file === undefined) {
            file = options;
            options = '-a'
        }

        try {
            let content = Fs.readFileSync(file, 'utf8'),
                input = content.toString();

            returnValue = tasks.count(options, input);
        } catch (err) {
            returnValue = {
                info: `File: ${file} does not exist`
            };
        } finally {
            return returnValue;
        }
    },
    info: tasks.info(option = '-x')
};
