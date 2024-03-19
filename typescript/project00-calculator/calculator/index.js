#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter a numbetr", type: "number", name: "firstnumber" },
    { message: "Enter a numbetr", type: "number", name: "secondnumber" },
    { message: "select operator", type: "list", name: "operator", choices: ["+", "-", "*", "/"] }
]);
if (answer.operator === "+") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "-") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "*") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "/") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("error");
}
;
