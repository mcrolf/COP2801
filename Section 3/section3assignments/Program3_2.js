// Program3_2       COP2801
// Michael Napoli   2275778
/*
Write a program that will allow me to enter numbers between 1 and 100. 
I will enter numbers until I enter 0. At that point, the program should 
display the count of how many time each numbered occurred. For example.

Enter a number between 1 and 100: 2
Enter a number between 1 and 100: 5
Enter a number between 1 and 100: 6
Enter a number between 1 and 100: 5
Enter a number between 1 and 100: 4
Enter a number between 1 and 100: 3
Enter a number between 1 and 100: 23
Enter a number between 1 and 100: 43
Enter a number between 1 and 100: 2
Enter a number between 1 and 100: 0

2 occurs 2 times
3 occurs 1 time
4 occurs 1 time
5 occurs 2 times
6 occurs 1 time
23 occurs 1 time
43 occurs 1 time
*/

// readline sync module
const readlineSync = require("readline-sync");
// initialize running for while loop
let running = true;
// create empty array for number list
let numsList = [];
// create empty array for duplicate numbers
let unique = [];
// create empty array for counts
let counts = [];
// prompt user to enter a number
var num = parseInt(readlineSync.question("Enter a number between 1 and 100: "));

// while running, add number > 0 to the numsList, add duplicates to uique, if 0 exit loop.
while (running){
    if (num > 0){
        numsList.push(num);
        if (!(unique.includes(num))){
            unique.push(num);
        }
        num = parseInt(readlineSync.question("Enter a number between 1 and 100: "));
    }
    else if (num === 0){
        running = false;
    }
}
// sort the unique array
unique.sort((a, b) => a-b);
// initialize counter
let count = 0;
// loop to identify the duplicate numbers in numsList
for (let step = 0; step < unique.length; step++){
    count = 0;
    for (let i = 0; i < numsList.length; i++){
        thisNum= unique[step];
        thatNum= numsList[i];       
        if (thisNum == thatNum){
            count += 1;
        }        
    }
    counts.push(count)        
}
// loop for output of each unique number and how many times they occur
for (let step = 0; step < unique.length; step++){
    num = unique[step];
    count = counts[step];    
    console.log(num + " occurs " + count + " times");
}