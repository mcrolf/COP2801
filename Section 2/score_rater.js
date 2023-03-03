// The Score Rater        COP2801
// by: Michael Napoli     2275778
/*
    When the player's score reaches a certain threshold,
    the program will respond with a comment.
    
    If the score is > 0 and <= 500, "At least you didn't score zero."
    
    If the score is > 500 and < 1000, "You scored over 500! Nice job!"

    If the score = 1000, "WOW! PERFECT SCORE! Now that's impressive!"
*/

// accumulator for score value
let score = 1000;

// if score > 0 and <= 500
if (score > 0 && score <= 500){
    console.log("Score: " + score)
    console.log("Not bad. At least you didn't score zero.");
}

// if score > 500 and < 1000
else if (score > 500 && score < 1000){
    console.log("Score: " + score)
    console.log("You scored over 500! Nice job!");
}

// if score = 1000
else if (score == 1000){
    console.log("Score: " + score)
    console.log("WOW! PERFECT SCORE! Now that's impressive!");
}
else{
    console.log("Ummm... yeah. Unnacceptable");
}