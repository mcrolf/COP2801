// Assignment2_3          COP2801
// by: Michael Napoli     2275778
/*
    Let's count some numbers! Write a program named program2-3.js 
    which allows me to enter an unspecified number of integers. 
    The program should count how many positive numbers I entered 
    and how many negative numbers I entered. It should sum those 
    numbers and calculated the average (not counting zeros). The 
    program should end when I enter 0. Display the total and average when done.
*/

// readlineSync module
const readlineSync = require("readline-sync");

// seting some initaial vatiables
let running = true;
let positiveSum = 0;
let negativeSum = 0;

// creating empty arrays for positive and negative numbers
let positiveList = [];
let negativeList = [];

// while running is true
while (running){
    // user input as integer
    const number = parseInt(readlineSync.question("Enter a number. Press Enter to continue or zero to quit: "));
    // condition for positive numbers
    if (number > 0){
        positiveSum += number
        positiveList.push(number)
        running = true;
    }
    // position for negative numbers
    else if (number < 0){
        negativeSum += number
        negativeList.push(number)
        running = true;
    }
    // when zero
    else{
        // turning running to false stops the loop
        running = false;
    }
}

// math for averages of positive and negative
let avgPositive = positiveSum / positiveList.length;
let avgNegative = negativeSum / negativeList.length;

// being fancy
console.log("calculating....... \n")

// output for sums, lists and averages
console.log("The sum of all positive numbers is: " + positiveSum);
console.log("The sum of all negative numbers is: " + negativeSum);
console.log("The positives are: " + positiveList);
console.log("The negatives are: " + negativeList);
console.log("The average of all entered positives is: " + avgPositive);
console.log("The average of all entered negatives is: " + avgNegative);