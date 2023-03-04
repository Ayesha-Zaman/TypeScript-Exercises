let Guest = ["Maria", "Naima", "Mahnoor"];
console.log("Guests List: "+ Guest+ "\n\n");
for(let i = 0; i < Guest.length; i++){
    console.log("Hey! " + Guest[i]+ ", I would like you to join us for special dinner tomorrow if you're available.\n");
 }
console.log("\nNaima can't join dinner due to personal reason. \n");
            
let guest_ind = Guest.indexOf("Naima");
Guest[guest_ind]= "Robania";
console.log("New Guest List: "+Guest + "\n");
//sending invitation to new guests
for(let i = 0; i < Guest.length; i++){
    console.log("Hey! " + Guest[i]+ ", I would like you to join us for special dinner tomorrow if you're available.\n");
}
