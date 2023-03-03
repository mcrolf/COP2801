// Program 3-3        COP2801
// Michael Napoli     2275778
/*
    Write a program to analyze scores. The program should be able 
    to read an unspecified number of scores input by the user. 
    The user should enter a negative number when they are done 
    entering scores. The program should calculate the average 
    and display how many scores are greater than the average, 
    how many are lower than the average, and how many are equal 
    to the average. 
*/

// readline sync module
const readlineSync = require("readline-sync");

// create empty array for scores
let scores = [];

// accumulator for the sum of the scores
let sumOfScores = 0;

// create empty arrays for scores greater than, less than and equal to the agerage score
let greaterThanAvg = [];
let lessThanAvg = [];
let equalToAvg = [];

// variable for initializing the while loop
let running = true;

// while running, get score from user, if > 0 add to scores list.
while (running){    
    let num = parseInt(readlineSync.question("Enter a score. Enter negative number to exit: "));
    if (num >= 0){
        sumOfScores += num;
        scores.push(num);
        running = true;
    }
    else{
        running = false;
    }
}

// calculate average score
let avgScore = (sumOfScores / scores.length);

// for loop to determine which scores are greater than, less than or equal to the average.
for (let num of scores){
    if (num > avgScore){
        greaterThanAvg.push(num);
    }
    else if (num < avgScore){
        lessThanAvg.push(num);
    }
    else if (num == avgScore){
        equalToAvg.push(num);
    }
}
// console output for average, number of scores greater, less and equal to the average.
console.log("The average score is: " + avgScore);
console.log("There are " + greaterThanAvg.length + " scores above the average");
console.log("There are " + lessThanAvg.length + " scores below the average");
console.log("There are " + equalToAvg.length + " scores equal to the average");