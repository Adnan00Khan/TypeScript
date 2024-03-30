// Q18
// Seeing the World
var places = ["Paris", "London", "Bali", "Dubai", "New York City"];
console.log(" original  : " + places);
console.log(" alphabetical order  : " + places.slice().sort());
console.log(" original  : " + places);
console.log("  reverse alphabetical order  : " + places.slice().sort().reverse());
console.log(" original  : " + places);
places.reverse();
console.log("Reverse order  : " + places);
places.reverse();
console.log(" original  : " + places);
places.sort();
console.log(" stored in alphabetical order  : " + places);
places.sort().reverse();
console.log(" stored in reverse alphabetical order  : " + places);
