#! usr/bin/env node
import inquirer from "inquirer"

const currency:any = {
     PKR : 1 , // BASE 
     USD : 0.0036,
     INR : 0.30,
     POUND : 0.0028,
     RIYAL : 0.013,
}

let ans = await inquirer.prompt([

    {
        name:"FROM",
        message:"convert FROM",
        type:"list",
        choices: ["PKR","USD","INR","POUND","RIYAL"]
    },
    {
        name:"TO",
        message:"convert TO",
        type:"list",
        choices: ["PKR","USD","INR","POUND","RIYAL"]
    },
    {
        name:"AMOUNT",
        message:"AMOUNT",
        type:"number"
        
    }




]);
let  currencyfrom = currency[ans.FROM]
let  currencyto = currency[ans.TO]
let Amount = ans.AMOUNT
let topkr =Amount/currencyfrom
let converted= topkr * currencyto
console.log(Math.floor( converted));

