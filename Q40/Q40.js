function make_album(artist, title) {
    var album_dict = {
        artist: artist,
        title: title
    };
    return album_dict;
}
var M_album = make_album('metallica', 'ride the lightning');
console.log(M_album);
var M2_albm = make_album('beethoven', 'ninth symphony');
console.log(M2_albm);
var M3_albm = make_album('willie nelson', 'red-headed stranger');
console.log(M3_albm);
var M4_albm = make_album('iron maiden', 'piece of mind');
console.log(M4_albm);
