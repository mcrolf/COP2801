// Assignment2_2          COP2801
// by: Michael Napoli     2275778
/*
Write a program named program2-2.js that generates a lottery of a three digit number 
and will check if the number the user enters wins the lottery according to these rules:

1.    If the number the user enters matches the lottery number in the exact order, they win $10,000 (Display it)
2.    If the user matches all digits but not necessarily in order, they win $3,000. (Display it)
3.    They win $1,000 if they match at-least one digit. (Display it)
*/

// constant for readlineSync node module
const readlineSync = require("readline-sync");

// condition for winning number
const winner = "619";

// user input for their lotto numbers
let userNumbers = (readlineSync.question("Enter your three lottery numbers: "));

// condition for winning number
if (userNumbers == winner){
    console.log("CONGRATULATIONS! You've Just won $10,000!!!");
}
// condition for same numbers but different order
else if (userNumbers == "916" || userNumbers == "196" || userNumbers == "169" || userNumbers == "691" || userNumbers == "961"){
    console.log("ALMOST! You win $3,000 for having correct numbers, but not in the correct order!");
}
// condition for at least one matching number
else if ((userNumbers.includes("6") ||  userNumbers.includes("1") || userNumbers.includes("9")) 
&& userNumbers.length == 3){
    console.log("You had at lease one out of three matching number! You win $1,000!");
}
// condition for no matching numbers
else{
    console.log("No win. Better luck next time")
}