let current_users = ["Yasir","Shahid", "Danyal", "Admin", "Ahmad"];
let new_users = ["Hana","Qaisar", "Akbar", "Nishat", "Ali"];
for (let i in new_users){
    if ((current_users.join("|").toLowerCase().split("|")).includes(new_users[i].toLowerCase())){
        console.log("You need to enter a new username. "+ new_users[i]+ " is already there. \n\n" );
    }else{
        console.log(new_users[i]+ " is available. \n\n" );
    }
}