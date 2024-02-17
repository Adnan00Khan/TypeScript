// Q40
// Album
function make_album(artist, title, tracks) {
    var albums = {
        artist: artist,
        title: title,
    };
    if (tracks != undefined) {
        albums.tracks = tracks;
    }
    return albums;
}
;
var string01 = make_album("Atif Aslam", "Jal Pari");
var string02 = make_album("Ali Zafar", "Masty", 12);
var string03 = make_album("Bohemia", "Thousand Thoughts");
console.log(string01);
console.log(string02);
console.log(string03);
