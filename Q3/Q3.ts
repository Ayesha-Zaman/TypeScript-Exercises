let pName:string = "Ayesha noreen";
console.log(pName.toUpperCase() + "\n");
console.log(pName.toLowerCase() + "\n");

function titlecase(str: string): string{
    let d: string = str.split(" ").map(word => word.charAt(0). toUpperCase() + word.substring(1).toLowerCase()).join(" ");
    return d;
   }
   console.log(titlecase(pName));
