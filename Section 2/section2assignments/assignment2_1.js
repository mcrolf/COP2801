// Assignment2_1          COP2801
// by: Michael Napoli     2275778
/*
    2-1: Linear equations are an important tool in science and many everyday applications. 
    They allow scientist to describe relationships between two variables in the physical 
    world, make predictions, calculate rates, and make conversions, among other things. 
    Linear equations can be solved by using Cramer's rule. If you don't know what cramer's 
    rule is, a quick Google search will yield several videos explaining it. Write a program 
    called program2-1.js that prompts the user to enter a, b,c, d, e, and f and displays 
    the result using Cramer's rule. If ad - bc is equal to 0 then you display "No Solution"
    
    Enter a: 9.0
    Enter b: 4.0
    Enter c: 3.0
    Enter d: -5.0
    Enter e: -6.0
    Enter f: -21.0
    x is -2.0 and y is 3.0
    */

// constant for readlineSync node module
const readlineSync = require("readline-sync");

// user input for variables a,b,c,d,e and f
let a = parseInt(readlineSync.question("Enter a: "));
let b = parseInt(readlineSync.question("Enter b: "));
let c = parseInt(readlineSync.question("Enter c: "));
let d = parseInt(readlineSync.question("Enter d: "));
let e = parseInt(readlineSync.question("Enter e: "));
let f = parseInt(readlineSync.question("Enter f: "));

// solving for x and y. plus condition for non solution answer
if ((a*d)-(b*c) == 0) {
    console.log("No Solution....")
}
else{
    let solutionX = (e*d - b*f)/(a*d - b*c);
    let solutionY = (a*f - e*c)/(a*d - b*c);
    console.log("x is " + solutionX.toFixed(1) + " y is " + solutionY.toFixed(1));
}