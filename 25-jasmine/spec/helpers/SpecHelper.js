beforeEach(function () {
    jasmine.addMatchers({
      toBePlaying: function () {
        return {
          compare: function (actual, expected) {
            var player = actual;
  
            return {
              pass: player.currentlyPlayingSong === expected && player.isPlaying
            }
          }
        };
      }
    });

    jasmine.addMatchers({
      toBeInTheSameAlbumAs: function () {
        return {
          compare: function (actual, expected) {
            var song = actual;
  
            return {
              pass: song.album === expected.album
            }
          }
        };
      }
    });
  });