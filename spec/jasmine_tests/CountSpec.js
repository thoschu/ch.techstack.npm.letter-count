const Util = require('util'),
    R = require('ramda');

describe("letter-count tests", function () {
    let LC = require('../../lib/app'),
        counted = null;

    describe("A. the count method", function() {
        beforeEach(function () {
            counted = LC.count("!thomas \n schulte7 \t hamburg ... ");
        });

        it("1. should be able to count the number of letters in the given string", function () {
            let result =  R.prop('letters', counted),
                answer = 20;
            expect(result).toEqual(answer);
        });

        it("2. should be able to count the number of lines in the given string", function () {
            let result =  R.prop('lines', counted),
                answer = 2;
            expect(result).toEqual(answer);
        });

        it("3. should be able to count the number of characters in the given string", function () {
            let result =  R.prop('chars', counted),
                answer = 33;
            expect(result).toEqual(answer);
        });

        it("4. should be able to count the number of words in the given string", function () {
            let result =  R.prop('words', counted),
                answer = 3;
            expect(result).toEqual(answer);
        });

        it("5. should be able to count the number of numbers in the given string", function () {
            let result =  R.prop('numbers', counted),
                answer = 1;
            expect(result).toEqual(answer);
        });

        it("6. should be able to count the number of wordsigns in the given string", function () {
            let result =  R.prop('wordsigns', counted),
                answer = 4;
            expect(result).toEqual(answer);
        });
    });

    describe("B. the countFromFile method", function() {
        describe("b.A. the countFromFile method without options", function() {
            beforeAll(function () {
                let pathToFile = R.concat(process.cwd(), '/test/input.txt');
                counted = LC.countFromFile(pathToFile);
            });

            it("1. should be able to count the number of wordsigns in the given file", function () {
                let result =  R.prop('wordsigns', counted),
                    answer = 2;
                expect(result).toEqual(answer);
            });

            it("2. should be able to count the number of numbers in the given file", function () {
                let result =  R.prop('numbers', counted),
                    answer = 3;
                expect(result).toEqual(answer);
            });

            it("3. should be able to count the number of words in the given file", function () {
                let result =  R.prop('words', counted),
                    answer = 2;
                expect(result).toEqual(answer);
            });

            it("4. should be able to count the number of characters in the given file", function () {
                let result =  R.prop('chars', counted),
                    answer = 23;
                expect(result).toEqual(answer);
            });

            it("5. should be able to count the number of lines in the given file", function () {
                let result =  R.prop('lines', counted),
                    answer = 2;
                expect(result).toEqual(answer);
            });

            it("6. should be able to count the number of letters in the given file", function () {
                let result =  R.prop('letters', counted),
                    answer = 14;
                expect(result).toEqual(answer);
            });
        });

        describe("b.B. the countFromFile method with options", function() {
            let pathToFile = null;

            it("1. should be able to count the number of wordsigns in the given file", function () {
                pathToFile = R.concat(process.cwd(), '/test/input.txt');
                counted = LC.countFromFile(pathToFile, '-ws');
                let result =  R.prop('wordsigns', counted),
                    answer = 2;
                expect(result).toEqual(answer);
            });

            it("2. should be able to count the number of numbers in the given file", function () {
                pathToFile = R.concat(process.cwd(), '/test/input.txt');
                counted = LC.countFromFile(pathToFile, '-n');
                let result =  R.prop('numbers', counted),
                    answer = 3;
                expect(result).toEqual(answer);
            });

            it("3. should be able to count the number of words in the given file", function () {
                pathToFile = R.concat(process.cwd(), '/test/input.txt');
                counted = LC.countFromFile(pathToFile, '-w');
                let result =  R.prop('words', counted),
                    answer = 2;
                expect(result).toEqual(answer);
            });

            it("4. should be able to count the number of characters in the given file", function () {
                pathToFile = R.concat(process.cwd(), '/test/input.txt');
                counted = LC.countFromFile(pathToFile, '-c');
                let result =  R.prop('chars', counted),
                    answer = 23;
                expect(result).toEqual(answer);
            });

            it("5. should be able to count the number of lines in the given file", function () {
                pathToFile = R.concat(process.cwd(), '/test/input.txt');
                counted = LC.countFromFile(pathToFile, '-ln');
                let result =  R.prop('lines', counted),
                    answer = 2;
                expect(result).toEqual(answer);
            });

            it("6. should be able to count the number of letters in the given file", function () {
                pathToFile = R.concat(process.cwd(), '/test/input.txt');
                counted = LC.countFromFile(pathToFile, '-l');
                let result =  R.prop('letters', counted),
                    answer = 14;
                expect(result).toEqual(answer);
            });
        });
    });
});