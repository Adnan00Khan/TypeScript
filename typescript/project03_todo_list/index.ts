#! /usr/bin/env node 
import inquirer from "inquirer"

let list : string[]  =[];
let condition = true;

while (condition) {
    

let ans=await inquirer.prompt([
    {
        name:"q1",
        type:"input",
        message:"enter what do you want to do in you todo list? :"
        
    },
    {
        name:"q2",
        type:"confirm",
        message:"do you want to add more ?",
        default:"false"
        
    }
])

list.push(ans.q1)

condition=ans.q2

};


for (let i = 0; i < list.length; i++) {
    console.log(i+1 +" : "+ list[i])
    
}