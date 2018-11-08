var Song = require('../Song');
var song;

beforeEach(function () {
    song1 = new Song('Happ birthday', 'My first album', 'Cindy Chan');
    song2 = new Song('Oh! Shit!', 'My first album', 'Cindy Chan')
    song3 = new Song('Lonely asshole', 'Love you forever 1999', 'Kelly may')
    songCopy = new Song('Happ birthday', 'My first album', 'Cindy Chan');
});

describe('Checking the song', function () {

    it('Have there own name', function () {
        expect(song1.name).toBe('Happ birthday');
        expect(song2.name).toBe('Oh! Shit!');
    })


    it('Have there own album', function () {
        expect(song1.album).toBe('My first album');
        expect(song2.album).toBe('My first album');
    })

    it('Have there own author', function () {
        expect(song1.author).toBe('Cindy Chan');
        expect(song2.author).toBe('Cindy Chan');
    })

    it('Can show the details', function(){
        expect(song1.getDescription()).toEqual('The name of this song is Happ birthday and it is from the album My first album. It is written by Cindy Chan')
    })

    it('have share the same album', function(){
        expect(song1.isInSameAlbum(song2)).toEqual(true)
        expect(song1.isInSameAlbum(song3)).toEqual(false)
    })

    it('if two songs are written by same author, are in the same album and with the same name but two different song objects', function(){
        expect(song1.name).toEqual(songCopy.name)
        expect(song1.author).toEqual(songCopy.author)
        expect(song1.album).toEqual(songCopy.album)
        expect(song1).toEqual(songCopy)
    })

    it('if two songs are written by same author, are in the same album and with the same name but two different song objects', function(){
        expect(song1.name).toEqual(songCopy.name)
        expect(song1.author).toEqual(songCopy.author)
        expect(song1).toBeInTheSameAlbumAs(song2)
        expect(song1.album).toEqual(songCopy.album)
        expect(song1).not.toBe(songCopy)
    })


})