function make_shirt(Message: string = "I love TypeScript", size: string = "Large"): void{
    console.log("Message on Shirt: "+ Message +"\n");
    console.log("Size of Shirt: "+ size + "\n");
   }
   make_shirt();
   make_shirt("Never give up, and stay strong.");
   make_shirt(undefined, "medium");
   