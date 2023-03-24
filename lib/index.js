/**
 * Module dependencies.
 */
const Fs = require('fs'),
    tasks = require('./src/tasks');

/**
 * letter-count.js module.
 * @module lib/index.js
 */
module.exports = {
    count: (input, option= '-a') => {
        return tasks.count(input, option);
    },
    countFromFile: (filePath, options = '-a') => {
        let returnValue;

        try {
            let content = Fs.readFileSync(filePath, 'utf8'),
                input = content.toString();

            returnValue = tasks.count(input, options);
        } catch (err) {
            returnValue = {
                info: `File: ${filePath} does not exist`
            };
        }

        return returnValue;
    },
    info: (key) => {
        return tasks.info(key);
    }
};
