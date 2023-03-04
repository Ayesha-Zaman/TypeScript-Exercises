let vahicles: string[]= ["land cruiser", "porsche cayenne", "defender range rover"];
for(let i = 0; i < vahicles.length; i++){
    if (vahicles[i] == "land cruiser"){
        let des: string = "My favourite mode of transporatation is land cruiser. \nIt can work in any environment. \nLike Sand, river, hilly roads. By maininting it's speed.\n"
        console.log(des);
    }
    else if (vahicles[i] == "porsche cayenne"){
        let des: string = "I would like to own porsche cayenne beacuse of it's speed and classic look. \nIt's a good Family Car. \n";
        console.log(des);
    }
    else{
        let des: string = "I would also like to own defender range rover. \nThe defender range rover has always impressed in terms of quality. \nFit and finish is impeccable. \nIt's a great off roading vahicle."
        console.log(des);
    }
    console.log("\n\n");
}