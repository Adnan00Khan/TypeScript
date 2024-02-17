// Q30
// Hello Admin
var names = ["ADNAN KHAN", "IMRAN KHAN", "ARSHAD KHAN", "ADMIN", "SAAD"];
for (var i = 0; i < names.length; i++) {
    if (names[i] === 'ADMIN') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + names[i] + ", thank you for logging in again.");
    }
}
//Q31
while (names.length > 0) {
    var remove = names.pop();
}
if (names.length > 0) {
    console.log("Hello admin, would you like to see a status report?");
}
else {
    console.log("We need to find some users.");
}
// Q32
var current_users = ["ADNAN KHAN", "IMRAN KHAN", "ARSHAD KHAN", "ADMIN", "SAAD"];
var new_users = ["ADNAN KHAN", "HARIS", "HASSAN", "ZAIN", "ADMIN"];
for (var i = 0; i < new_users.length; i++) {
    var UsernameTaken = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            UsernameTaken = true;
        }
    }
    if (UsernameTaken) {
        console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
    }
    else {
        console.log("The username '" + new_users[i] + "' is available.");
    }
}
