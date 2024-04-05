// Q3
// Name Cases
var Person2 = "M adNan khAn";
console.log(Person2.toUpperCase());
console.log(Person2.toLowerCase());
function convertToTitleCase(str) {
    // return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return str = str.substring(12, -11).toLowerCase();
}
console.log(convertToTitleCase(Person2));
