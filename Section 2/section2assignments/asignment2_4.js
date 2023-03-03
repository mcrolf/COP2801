// Assignment2_4          COP2801
// by: Michael Napoli     2275778
/*
   Write a program named program2-4. This program should 
   allow Professor T to enter a number for how many students 
   I want to enter, and then allow me to enter that many 
   students and their score. At the end, the program should 
   display the name of the student who has earned the highest score. 
*/

// readlineSync module
const readlineSync = require("readline-sync");

// ask the user how many times to loop
let studentAmount = parseInt(readlineSync.question("How many students would you like to enter scores for? "));

// create empty array
let testScores = [];

// set max score at zero
let maxScore = 0;

// set position at zero
let position = 0;

// for loop to ask for name, score, then add them to the array as objects
for (let step = 0; step < studentAmount; step++){
    // user input for student name
    let name = readlineSync.question("Enter the name of the student: ");
    // user input for score of student as integer
    let score = parseInt(readlineSync.question("Enter their test score: "));    
    // name is the key and score is the value
    testScores.push({Name: name, Score: score});    
}
// for when step is less than the amount of students entered
for (let step = 0; step < studentAmount; step++){
    // if score entered is greater than known max score
    if (testScores[step].Score > maxScore){
        // max score is now that new higher entered value
        maxScore = testScores[step].Score
        position = step;
    }
}

// max score is the highest value score, gives the name attached to the highest score
maxScore = testScores[position].Name;

// output for which student had the highest score
console.log(maxScore + " had the highest test score.");