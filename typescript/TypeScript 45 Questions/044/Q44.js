// Q44
// Sandwiches
function Sandwich() {
    var things = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        things[_i] = arguments[_i];
    }
    if (things.length != 0) {
        console.log("Ingredients:");
        things.forEach(function (item) {
            console.log("- " + item);
        });
    }
}
Sandwich("fish", "Cheese", "Lettuce", "Tomato");
Sandwich("beef", "Onion", "Onion", "Onion", "Onion", "Onion", "Onion", "Onion", "Onion", "Onion");
Sandwich("Cabbage");
