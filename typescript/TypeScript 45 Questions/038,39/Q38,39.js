// Q38
// Cities
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is in " + country);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Chicago", "USA");
//  Q39
function city_country(city, country) {
    return (city + ", " + country);
}
var string1 = city_country("Karachi", "Pakistan");
var string2 = city_country("Lahore", "Pakistan");
var string3 = city_country("Chicago", "USA");
console.log(string1);
console.log(string2);
console.log(string3);
