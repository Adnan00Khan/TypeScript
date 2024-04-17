#! /usr/bin/env node

import inquirer from "inquirer"

let ans:{sentence:string} =await inquirer.prompt({
     name:"sentence",
     type:"input",
     message:"write a sentence to count the words in it :" 
})

let count:string[]=ans.sentence.trim().split(" ")


count.forEach((val,i) => {

 console.log(`${i+1} : ${val}`);
 
    
});
console.log(`your word count is ${count.length}`);

