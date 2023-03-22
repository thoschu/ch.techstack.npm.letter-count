/**
 * Module dependencies.
 */
const Fs = require('fs'),
    R = require('ramda'),
    tasks = require('./src/tasks');

/**
 * letter-count.js module.
 * @module lib/index.js
 */
module.exports = {
    count: (option, input = null) => {
        if (input === null && option === undefined) {
            const zero = R.always(0)();

            return {
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
        } else if (input === null) {
            input = option;
            option = '-a'
        }

        return tasks.count(option, input);
    },
    countFromFile: (options, filePath = null) => {
        let returnValue = null;

        if (filePath === null) {
            filePath = options;
            options = '-a'
        }

        try {
            let content = Fs.readFileSync(filePath, 'utf8'),
                input = content.toString();

            returnValue = tasks.count(options, input);
        } catch (err) {
            returnValue = {
                info: `File: ${filePath} does not exist`
            };
        } finally {}

        return returnValue;
    },
    info: (key = null) => {
        return tasks.info();
    }
};
