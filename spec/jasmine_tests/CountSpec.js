const Util = require('util'),
    R = require('ramda');

describe("letter-count.js tests", function () {
    let LC = require('../../lib/app'),
        counted = null;

    describe("A. the count method", function() {
        beforeEach(function () {
            counted = LC.count("!thomas \n schulte7 \t hamburg ... ");
        });

        it("1. should be able to count the number of letters in the given string", function () {
            let result =  R.prop('letters', counted);

            expect(20).toEqual(result);
        });

        it("2. should be able to count the number of lines in the given string", function () {
            let result =  R.prop('lines', counted);

            expect(2).toEqual(result);
        });

        it("3. should be able to count the number of characters in the given string", function () {
            let result =  R.prop('chars', counted);

            expect(33).toEqual(result);
        });

        it("4. should be able to count the number of words in the given string", function () {
            let result =  R.prop('words', counted);

            expect(3).toEqual(result);
        });

        it("5. should be able to count the number of numbers in the given string", function () {
            let result =  R.prop('numbers', counted);

            expect(1).toEqual(result);
        });

        it("6. should be able to count the number of wordsigns in the given string", function () {
            let result =  R.prop('wordsigns', counted);

            expect(4).toEqual(result);
        });
    });

    describe("B. the countFromFile method", function() {
        let currentWorkingDirectory = process.cwd(),
            filePath = '/test/input.txt',
            pathToFile = R.concat(currentWorkingDirectory, filePath);

        describe("b.A. the countFromFile method without options", function() {
            beforeAll(function () {
                counted = LC.countFromFile(pathToFile);
            });

            it("1. should be able to count the number of wordsigns in the given file", function () {
                let result =  R.prop('wordsigns', counted);

                expect(2).toEqual(result);
            });

            it("2. should be able to count the number of numbers in the given file", function () {
                let result =  R.prop('numbers', counted);

                expect(3).toEqual(result);
            });

            it("3. should be able to count the number of words in the given file", function () {
                let result =  R.prop('words', counted);

                expect(2).toEqual(result);
            });

            it("4. should be able to count the number of characters in the given file", function () {
                let result =  R.prop('chars', counted);

                expect(23).toEqual(result);
            });

            it("5. should be able to count the number of lines in the given file", function () {
                let result =  R.prop('lines', counted);

                expect(2).toEqual(result);
            });

            it("6. should be able to count the number of letters in the given file", function () {
                let result =  R.prop('letters', counted);

                expect(14).toEqual(result);
            });
        });

        describe("b.B. the countFromFile method with options", function() {
            let countFromFile = null,
                countFromFileFn = (opt) => {
                    return countFromFile(pathToFile, opt);
                };

            beforeAll(function () {
                countFromFile = R.prop('countFromFile', LC);
            });

            it("1. should be able to count the number of wordsigns in the given file", function () {
                counted = countFromFileFn('-ws');

                let result =  R.prop('wordsigns', counted);

                expect(2).toEqual(result);
            });

            it("2. should be able to count the number of numbers in the given file", function () {
                counted = countFromFileFn('-n');

                let result =  R.prop('numbers', counted);

                expect(3).toEqual(result);
            });

            it("3. should be able to count the number of words in the given file", function () {
                counted = countFromFileFn('-w');

                let result =  R.prop('words', counted);

                expect(2).toEqual(result);
            });

            it("4. should be able to count the number of characters in the given file", function () {
                counted = countFromFileFn('-c');

                let result =  R.prop('chars', counted);

                expect(23).toEqual(result);
            });

            it("5. should be able to count the number of lines in the given file", function () {
                counted = countFromFileFn('-ln');

                let result =  R.prop('lines', counted);

                expect(2).toEqual(result);
            });

            it("6. should be able to count the number of letters in the given file", function () {
                counted = countFromFileFn('-l');

                let result =  R.prop('letters', counted);

                expect(14).toEqual(result);
            });
        });
    });
});