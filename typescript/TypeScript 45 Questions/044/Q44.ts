// Q44
// Sandwiches
function Sandwich(...things) {
    
    if (things.length != 0) {
         console.log("Ingredients:");
         things.forEach(item => {
            console.log("- " + item);
        });
    } 

}

Sandwich("fish", "Cheese", "Lettuce", "Tomato");
Sandwich("beef", "Onion","Onion","Onion","Onion","Onion","Onion","Onion","Onion","Onion",);
Sandwich("Cabbage");


