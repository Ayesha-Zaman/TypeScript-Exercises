let users: string[] = ["Yasir","Shahid", "Danyal", "Admin", "Ahmad"];
for(let i in users){
    if(users[i] != "Admin"){
        console.log("Hello "+ users[i] + ", thank you for logging in again.\n");
    }else{
        console.log("Hello "+ users[i] + ", would you like to see a status report?.\n");
    }
}

users.splice(0, users.length);

if (users.length < 1){
    console.log("We need to find some users!.")
}