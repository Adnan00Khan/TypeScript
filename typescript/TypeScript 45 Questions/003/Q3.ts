// Q3
// Name Cases
var Person2="M adNan khAn";

console.log(Person2.toUpperCase());
console.log(Person2.toLowerCase());
function convertToTitleCase(str) {
    str =str.toLowerCase()
     let newstr =str.split(" ")
     

      for (let i = 0; i < newstr.length; i++) {
         newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1)
        
      }

      return newstr.join(" ")
}
   
  console.log(convertToTitleCase(Person2))