var magician = ["Harry", "Penn", "Ricky", "Mark"];
magician.forEach(make_great);
magician.forEach(show_magicians);
function show_magicians(value) {
    console.log(value + "\n");
}
function make_great(value) {
    console.log("The great " + value + "\n");
}
