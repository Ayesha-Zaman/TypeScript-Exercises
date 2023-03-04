let magician = ["Harry", "Penn", "Ricky", "Mark"];
magician.forEach(make_great);
magician.forEach(show_magicians);

function show_magicians(value: string): void{
    console.log(value + "\n");
}
function make_great(value:string): void{
    console.log("The great " +value + "\n");
}
