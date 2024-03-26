import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
let ans = await inquirer.prompt([{
        name: "game",
        message: "please guess a number between 1-10 :",
        type: "number"
    }]);
if (ans.game === randomNumber) {
    console.log("you guess the right number");
}
else {
    console.log("wrong answer");
}
