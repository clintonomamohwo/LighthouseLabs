var chai = require('chai');

const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {

  for (let element in library["playlists"]) {
    let p = element;
    let name = library.playlists[element].name;
    let numTrack = library.playlists[element].tracks.length;
    console.log("Print Play List",p + "" + name + "-" + numTrack + "tracks");
  }


};
//TEST CODE
printPlaylists("PRINT PLAY LISTS : ",library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (let element in library["tracks"]) {
    let t = element;
    let name = library.tracks[element].name;
    let artist = library.tracks[element].artist;
    let album = library.tracks[element].album;

    console.log("Print track", t + "" + name + "by" + artist + "" + album);
  }

};
//TEST CODE
printTracks("PRINT TRACKS : ",library);


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let p = playlistId;
  let name = library.playlists[playlistId].name;
  let tracks = library.playlists[playlistId].tracks.length;
  console.log("Print Play List",p + "" + name + "" + tracks);
  for (let element in library.playlists[playlistId].tracks) {
    let tId = library.playlists[playlistId].tracks[element];

    let nameT = library.tracks[tId].name;
    let artist = library.tracks[tId].artist;
    let albumT = library.tracks[tId].album;

    console.log("Print Play List",tId + "" + nameT + "by" + artist + "" + albumT);
  

  }

};
//TEST CODE
printPlaylist('p01');


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  let addedTrack = library.playlists[playlistId].tracks;
  console.log("ADD TRACK TO PLAYLIST : ",addedTrack);

};
//TEST CODE
addTrackToPlaylist("t03","p01");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  let uId = generateUid();
  library.tracks[uId] =
   {
     name: name,
     artist:artist,
     album:album
     
   };
  console.log("ADD TRACK: ",library.tracks[uId]);

};
//TEST CODE
addTrack("Hand of God","Jon Bellion","The Human Condition");




// adds a playlist to the library
const addPlaylist = function(name) {
  let uId = generateUid();
  library.playlists[uId] =
       {id: uId,
         name: name,
         tracks: []
       };

  console.log("ADDED PLAYLIST " ,library.playlists[uId]);
       

};
//TEST CODE
addPlaylist("My playlist");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};

