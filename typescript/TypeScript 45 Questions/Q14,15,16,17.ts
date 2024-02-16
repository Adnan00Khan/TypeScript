// Q14
// Guest List
var names=["ADNAN KHAN","IMRAN KHAN","ARSHAD KHAN"]
names.forEach(element => {
    console.log("you are invited to dinner "+element )
});
// Q15
var guestleaveing="ADNAN KHAN";
names.forEach(element => {
    console.log(guestleaveing+" can’t make it leting you know "+element )
});



var ADNANKHAN = names.indexOf("ADNAN KHAN");

if (ADNANKHAN !== -1) {
    names[ADNANKHAN] = "RAYAN";
}
names.forEach(element => {
    console.log("you are invited to dinner "+element )
});
// Q16
names.forEach(element => {
    console.log("i have found bigger dinner table inviting more friends "+element )
});
names.unshift("HASSAN");
names.splice(2, 0, "ZAIN");
names.push("saad");
names.forEach(element => {
    console.log("you are invited to dinner "+element )
});
// Q17
names.forEach(element => {
    console.log(" found out that your new dinner table won’t arrive in time for the dinner so i can only invite 2 "+element )
});
while (names.length > 2) {
    var removedGuest = names.pop();
    console.log("Sorry," +removedGuest+ ", we can't invite you to dinner.");
}
names.forEach(element => {
    console.log("you  are still invited "+element )
});
names.pop();
names.pop();
names.forEach(element => {
    console.log("anyone here"+element )
});
