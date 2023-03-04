function make_shirt(Message, size) {
    if (Message === void 0) { Message = "I love TypeScript"; }
    if (size === void 0) { size = "Large"; }
    console.log("Message on Shirt: " + Message + "\n");
    console.log("Size of Shirt: " + size + "\n");
}
make_shirt();
make_shirt("Never give up, and stay strong.");
make_shirt(undefined, "medium");
