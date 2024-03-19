// Q3
// Name Cases
var Person2 = "M adNan khAn";
console.log(Person2.toUpperCase());
console.log(Person2.toLowerCase());
function convertToTitleCase(str) {
    if (!str) {
        return "";
    }
    return str.toLowerCase().replace(/\b\w/g, function (s) { return s.toUpperCase(); });
}
;
console.log(convertToTitleCase(Person2));
