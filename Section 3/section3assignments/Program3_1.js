// Program3_1        COP2801
//Michael Napoli     2275778
/*
    Write a program that allows me to enter ten integers. 
    The program should then display the ten integers I entered 
    in the reverse order of how they were entered.
*/

// readline sync module
const readlineSync = require("readline-sync");

// create empty array for list of integers
var ints = [];

// for loop, repeats 10 times. user input for integers, push to the array.
for (let step = 0; step < 10; step++){
    let number = parseInt(readlineSync.question("Enter an Integer: "));
    ints.push(number);
}

// reverse the order of the array
ints.reverse();

// show array in console
console.table(ints);