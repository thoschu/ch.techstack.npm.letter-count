const Util = require('util'),
    R = require('ramda');

describe("letter-count test", function () {
    var LC = null;

    beforeEach(function () {
        LC = require('../../lib/app');
    });

    it("should be able to count the string", function () {
        const answer = 13;
        let result = LC.count("thomasschulte").letters;

        expect(result).toEqual(answer);
    });
});