const Util = require('util'),
    R = require('ramda');

describe("CountTest", function () {
    var LC;

    beforeEach(function () {
        LC = require('../../lib/app');
    });

    it("should be able to count the string", function () {
        var result = LC.count("thomasschulte").letters;
        var answer = 13;

        expect(result).toEqual(answer);
    });
});