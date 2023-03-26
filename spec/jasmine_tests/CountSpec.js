const R = require('ramda');

describe("letter-count.js tests", function () {
    let LC = require('../../lib');

    describe("A. the count method", function() {
        let counted = null;

        beforeAll(function () {
            counted = LC.count("!thomas \n schulte7 \t hamburg 19.77 ... ");
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

            expect(39).toEqual(result);
        });

        it("4. should be able to count the number of words in the given string", function () {
            let result =  R.prop('words', counted);

            expect(3).toEqual(result);
        });

        it("5. should be able to count the number of numbers in the given string", function () {
            let result =  R.prop('numbers', counted);

            expect(5).toEqual(result);
        });

        it("6. should be able to count the number of wordsigns in the given string", function () {
            let result =  R.prop('wordsigns', counted);

            expect(5).toEqual(result);
        });


        it("7. should be able to count the number of spaces in the given string", function () {
            let result =  R.prop('spaces', counted);

            expect(9).toEqual(result);
        });

        it("8. should be able to count the number of floats in the given string", function () {
            let result =  R.prop('floats', counted);

            expect(1).toEqual(result);
        });

        it("9. should be able to count the number of integers in the given string", function () {
            let result =  R.prop('integers', counted);

            expect(1).toEqual(result);
        });

    });

    describe("B. the countFromFile method", function() {
        let globalProcessObject = process,
            cwdFnRef = R.prop('cwd', globalProcessObject),
            currentWorkingDirectory =  R.call(cwdFnRef),
            filePath = '/test/input.txt',
            pathToFile = R.concat(currentWorkingDirectory, filePath);

        describe("b.A. the countFromFile method without options", function() {
            let counted = null;

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

                expect(22).toEqual(result);
            });

            it("5. should be able to count the number of lines in the given file", function () {
                let result =  R.prop('lines', counted);

                expect(1).toEqual(result);
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
                let counted = countFromFileFn('-ws'),
                    result =  R.prop('wordsigns', counted);

                expect(2).toEqual(result);
            });

            it("2. should be able to count the number of numbers in the given file", function () {
                let counted = countFromFileFn('-n'),
                    result =  R.prop('numbers', counted);

                expect(3).toEqual(result);
            });

            it("3. should be able to count the number of words in the given file", function () {
                let counted = countFromFileFn('-w'),
                    result =  R.prop('words', counted);

                expect(2).toEqual(result);
            });

            it("4. should be able to count the number of characters in the given file", function () {
                let counted = countFromFileFn('-c'),
                    result =  R.prop('chars', counted);

                expect(22).toEqual(result);
            });

            it("5. should be able to count the number of lines in the given file", function () {
                let counted = countFromFileFn('-ln'),
                    result =  R.prop('lines', counted);

                expect(1).toEqual(result);
            });

            it("6. should be able to count the number of letters in the given file", function () {
                let counted = countFromFileFn('-l'),
                    result =  R.prop('letters', counted);

                expect(14).toEqual(result);
            });
        });
    });
});
