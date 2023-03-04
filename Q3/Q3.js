var pName = "Ayesha noreen";
console.log(pName.toUpperCase() + "\n");
console.log(pName.toLowerCase() + "\n");
function titlecase(str) {
    var d = str.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(); }).join(" ");
    return d;
}
console.log(titlecase(pName));
