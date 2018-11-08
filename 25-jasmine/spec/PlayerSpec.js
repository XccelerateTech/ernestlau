var Player = require('../Player');
var Song = require('../Song');
var player;
var song;

beforeEach(function() {
  player = new Player();
  song = new Song();
});

it("should be able to play a Song", function() {
  player.play(song);
  expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
  expect(player).toBePlaying(song);
});