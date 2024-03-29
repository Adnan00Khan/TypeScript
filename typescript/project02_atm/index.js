#! /usr/bin/env node
import inquirer from "inquirer";
let mybal = 10000;
let mypin = 47911;
console.log(`pin is : ${mypin}`);
let pinans = await inquirer.prompt([{
        name: "pin",
        message: "enter you pin number",
        type: "number"
    }]);
if (pinans.pin === mypin) {
    let options = await inquirer.prompt([{
            name: "option",
            message: "please select option",
            type: "list",
            choices: ["check balance", "withdraw", "quick withdraw"]
        }]);
    if (options.option === "check balance") {
        console.log(mybal);
    }
    else if (options.option === "withdraw") {
        let amount = await inquirer.prompt([{
                name: "amount",
                message: "enter amount",
                type: "number"
            }]);
        if (amount.amount <= mybal) {
            mybal -= amount.amount;
            console.log(`now your balance is ${mybal}`);
        }
        else {
            console.log("insufficient amount");
        }
    }
    else if (options.option === "quick withdraw") {
        let amountOption = await inquirer.prompt([{
                name: "amountOption",
                message: "select amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }]);
        if (amountOption.amountOption === "1000") {
            mybal = mybal - 1000;
            console.log(`now your balance is ${mybal}`);
        }
        else if (amountOption.amountOption === "2000") {
            mybal = mybal - 2000;
            console.log(`now your balance is ${mybal}`);
        }
        else if (amountOption.amountOption === "5000") {
            mybal = mybal - 5000;
            console.log(`now your balance is ${mybal}`);
        }
        else if (amountOption.amountOption === "10000") {
            mybal = mybal - 10000;
            console.log(`now your balance is ${mybal}`);
        }
    }
}
else {
    console.log("incorrect pin number");
}
