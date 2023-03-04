function make_album(artist: string, title: string){
    type Album_Dict = {
        artist: String,
        title: String
        };
    let album_dict: Album_Dict = {
        artist: artist,
        title: title,
        };
        return album_dict;
}

let M_album = make_album('metallica', 'ride the lightning');
console.log(M_album);

let M2_albm = make_album('beethoven', 'ninth symphony');
console.log(M2_albm);

let M3_albm = make_album('willie nelson', 'red-headed stranger');
console.log(M3_albm);

let M4_albm = make_album('iron maiden', 'piece of mind');
console.log(M4_albm); 