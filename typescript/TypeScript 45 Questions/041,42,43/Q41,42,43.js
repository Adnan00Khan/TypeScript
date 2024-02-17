// Q41,42,43
// Magicians
var magicians = ["David Blaine", "Dynamo", "Shin Lim", "Derren Brown"];
function show_magicians() {
    magicians.forEach(function (element) {
        console.log(element);
    });
    magicians.forEach(function (element) {
        console.log(make_great() + element);
    });
}
//Q42
function make_great() {
    return ("The Great ");
}
show_magicians();
