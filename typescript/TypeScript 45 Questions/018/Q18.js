var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q18
// Seeing the World
var places = ["Paris", "London", "Bali", "Dubai", "New York City"];
console.log(places);
var alphabetical_order = __spreadArray([], places, true).sort();
console.log(alphabetical_order);
console.log(places);
var reverse_alphabetical_order = __spreadArray([], places, true).sort().reverse();
console.log(reverse_alphabetical_order);
console.log(places);
places.reverse();
console.log(places);
places.reverse();
console.log(places);
places.sort();
console.log(places);
places.sort().reverse();
console.log(places);
