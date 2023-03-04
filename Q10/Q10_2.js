var pName = "Ayesha noreen";
console.log(pName.toUpperCase() + "\n"); //converting string into all uppercase letters
console.log(pName.toLowerCase() + "\n"); // converting whole string into lower case
function titlecase(str) {
    var d = str.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(); }).join(" "); //converting string into title case
    return d;
}
console.log(titlecase(pName));
