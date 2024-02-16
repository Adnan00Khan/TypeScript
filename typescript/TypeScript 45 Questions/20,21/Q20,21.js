// Q20
var countries = ["USA", "Canada", "France", "Japan", "Australia"];
countries.forEach(function (element) {
    console.log(element);
});
// Q21
var countryinfo = {
    "USA": {
        capital: "Washington, D.C.",
        language: "English"
    },
    "Canada": {
        capital: "Ottawa",
        language: "English, French"
    },
    "France": {
        capital: "Paris",
        language: "French"
    },
    "Japan": {
        capital: "Tokyo",
        language: "Japanese"
    },
    "Australia": {
        capital: "Canberra",
        language: "English"
    }
};
for (var info in countryinfo) {
    console.log(info + ", Capital : " + countryinfo[info].capital + ", Language : " + countryinfo[info].language);
}
