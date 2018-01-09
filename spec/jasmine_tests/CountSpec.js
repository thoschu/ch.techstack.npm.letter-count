const Util = require('util'),
    R = require('ramda');

describe("letter-count test", function () {
    let LC = require('../../lib/app')
        count = LC.count("thomasschulte");

    beforeEach(function () {
        LC = require('../../lib/app');
    });

    it("should be able to count the number of letters in the string", function () {
        let result = count.letters,
            answer = 13;

        expect(result).toEqual(answer);
    });

    it("should be able to count the number of line in the string", function () {
        let result = count.lines,
            answer = 2;

        expect(result).toEqual(answer);
    });

    // it("should be able to count the number of line in the string", function () {
    //     let result = count.lines,
    //         answer = 2;
    //
    //     expect(result).toEqual(answer);
    // });
});