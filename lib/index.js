/**
 * Module dependencies.
 */
const Fs = require('fs'),
    Path = require('path'),
    R = require('ramda'),
    Md5 = require('md5')
    tasks = require('./tasks');

/**
 * letter-count.js module.
 * @module lib/index.js
 */
module.exports = {
    count: (options, input) => {
        console.log(options);
        console.log(input);

        if (input === undefined) {
            input = options;
            options = '--all'
        }

        return tasks.count(options, input);
    },
    countFromFile: (options, file) => {
        let returnValue = null;

        if (file === undefined) {
            file = options;
            options = '--all'
        }

        try {
            let content = Fs.readFileSync(file),
                input = content.toString();

            returnValue = tasks.count(options, input);
        } catch (err) {
            returnValue = {
                info: 'file does not exist'
            };
        } finally {
            return returnValue;
        }
    },
    info: tasks.info(options = '-x')
};
