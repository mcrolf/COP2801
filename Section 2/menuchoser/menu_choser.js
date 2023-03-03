// Menu Choices           COP2801
// by: Michael Napoli     2275778
/*
    Show the user a list of difficulty settings.
    Ask the user to select one of the choices.
    Display the user's choice.
*/

// constant for readline sync module
const readlineSync = require("readline-sync");

// initialize variable for while loop condition
let again = "y";

// while loop for choice selection
while (again == "y") {
    console.log("Difficulty: \n");
    console.log("1 - EASY");
    console.log("2 - NORMAL");
    console.log("3 - HARD");

    // prompts the user to input the answer to the question. changes input to integer
    const choice = parseInt(readlineSync.question("Select Your Difficulty: "));

    // handler for choices
    switch (choice) {
        case 1:
            console.log("You Chose: EASY \n");
            break;
        case 2:
            console.log("You Chose: NORMAL \n");
            break;
        case 3:
            console.log("You Chose: HARD \n");
            break;
        default:
            console.log("You made an invalid selection \n");
    }

    // output after difficulty selection
    console.log("You played an exciting game \n");
    // play again? requires user input using readline sync question
    again = readlineSync.question("Play Again? y/n: ");
}
// end prompt
console.log("Goodbye! Thanks for playing!")