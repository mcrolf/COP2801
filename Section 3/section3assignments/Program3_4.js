// Program3-4       COP2801
// Michael Napoli   2275778
/*
    Write a program that allows the user to enter a number of student scores. 
    The program will use the best score for a student to assign their grade 
    using the following scheme:

The score is > or = the best - 10 then the grade is A.
The score is > or = the best - 20 then the grade is B.
The score is > or = the best - 30 then the grade is C.
The score is > or = the best - 40 then the grade is D.
Anything else is an F
The program will start by prompting the user for how many students there are. 
It should then prompt them to enter all the scores and finishes by displaying 
the grades. See the example below:

Enter the number of students: 4

Enter Score: 40

Enter Score: 55

Enter Score: 70

Enter Score: 58

Student 0 score is 40 and grade is C

Student 1 score is 55 and grade is B

Student 2 score is 70 and grade is A

Student 3 score is 58 and grade is B
*/

// readline sync module
const readlineSync = require("readline-sync");
// empty array for testScores
let testScores = [];
// asks user how many students to enter grades for
var numOfStudents = parseInt(readlineSync.question("How many students are you entering scores for? "));

// enter scores for given number of students and add them to testScores
for (let step = 0; step < numOfStudents; step++){
    let score = parseInt(readlineSync.question("Enter the score for student " + step + ": "));
    testScores.push(score);
}

// highest score is the max value in the array
var theBest = parseInt(Math.max.apply(null, testScores));

// determine the letter grade for each student's score based on the rubric provided. output to console.
for (let step = 0; step < testScores.length; step++){
    if (testScores[step] >= (theBest - 10)){
        console.log("Student " + step + " score is " + testScores[step] + " and grade is A"); 
    }
    else if (testScores[step] >= (theBest - 20)){
        console.log("Student " + step + " score is " + testScores[step] + " and grade is B");
    }
    else if (testScores[step] >= (theBest - 30)){
        console.log("Student " + step + " score is " + testScores[step] + " and grade is C");
    }
    else if (testScores[step] >= (theBest - 40)){
        console.log("Student " + step + " score is " + testScores[step] + " and grade is D");
    }
    else if (testScores[step] <= (theBest - 40)){
        console.log("Student " + step + " score is " + testScores[step] + " and grade is F");
    }
}
