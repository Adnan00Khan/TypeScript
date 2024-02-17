//Q35
// Animals
var Animals = ["Dog", "Cat", "Goat"];
for (var i = 0; i < Animals.length; i++) {
    console.log(Animals[i]);
}
for (var i = 0; i < Animals.length; i++) {
    var msg;
    if (Animals[i] === "Dog") {
        msg = ": it is derived from extinct gray wolves, and the gray wolf is the dog's closest living relative";
    }
    else if (Animals[i] === "Cat") {
        msg = ": The cat, commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae";
    }
    else if (Animals[i] === "Goat") {
        msg = ": The goat is a member of the animal family Bovidae and the tribe Caprini, meaning it is closely related to the sheep.";
    }
    console.log(Animals[i] + msg);
}
console.log("'Any of these animals would make a great pet!'");
