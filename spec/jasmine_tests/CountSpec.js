const Util = require('util'),
    R = require('ramda');

describe("A. letter-count test", function () {
    let LC = require('../../lib/app'),
        counted = LC.count("!thomas \n schulte7 \t hamburg ... ");

    beforeEach(function () {
        LC = require('../../lib/app');
    });

    it("1. should be able to count the number of letters in the given string", function () {
        let result = counted.letters,
            answer = 20;

        expect(result).toEqual(answer);
    });

    it("2. should be able to count the number of lines in the given string", function () {
        let result = counted.lines,
            answer = 2;

        expect(result).toEqual(answer);
    });

    it("3. should be able to count the number of characters in the given string", function () {
        let result = counted.chars,
            answer = 33;

        expect(result).toEqual(answer);
    });

    it("4. should be able to count the number of words in the given string", function () {
        let result = counted.words,
            answer = 3;

        expect(result).toEqual(answer);
    });

    it("5. should be able to count the number of numbers in the given string", function () {
        let result = counted.numbers,
            answer = 1;

        expect(result).toEqual(answer);
    });

    it("6. should be able to count the number of wordsigns in the given string", function () {
        let result = counted.wordsigns,
            answer = 4;

        expect(result).toEqual(answer);
    });
});