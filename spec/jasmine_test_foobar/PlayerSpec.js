const Util = require('util');

describe("Test", function () {
    var LC = require('../../lib/app');

    beforeEach(function () {

    });

    it("should be able to count the string", function () {
        var result = LC.count("thomas").letters;
        var answer = 7;

        expect(result).toEqual(answer);
    });

    describe("when xxx has been paused", function () {
        beforeEach(function () {
            // player.play(song);
            // player.pause();
        });

        it("should indicate that the xxx is currently paused", function () {
            // expect(player.isPlaying).toBeFalsy();
            //
            // // demonstrates use of 'not' with a custom matcher
            // expect(player).not.toBePlaying(song);
        });

        it("should be possible to resume", function () {
            // player.resume();
            // expect(player.isPlaying).toBeTruthy();
            // expect(player.currentlyPlayingSong).toEqual(song);
        });
    });

    // demonstrates use of spies to intercept and test method calls
    it("tells the current xxx if the user has made it a favorite", function () {
        // spyOn(song, 'persistFavoriteStatus');
        //
        // player.play(song);
        // player.makeFavorite();
        //
        // expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });

    //demonstrates use of expected exceptions
    describe("#resume", function () {
        it("should throw an exception if ...", function () {
            // player.play(song);
            //
            // expect(function() {
            //   player.resume();
            // }).toThrowError("song is already playing");
        });
    });
});