var magician = ["Harry", "Penn", "Ricky", "Mark"];
var new_magician = ["David", "John", "Sadia", "Tony"];
magician.forEach(make_great);
new_magician.forEach(make_great);
function make_great(value) {
    if (new_magician.includes(value)) {
        console.log("The great " + value + "\n");
    }
    else {
        console.log(value);
    }
}
