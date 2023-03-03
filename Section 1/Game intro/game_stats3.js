// Game Statistics 3
// demonstrates constants

let score = 0;         // initialize score at zero
let distance = 0;
let playAgain = "y";
let lives = 3;
let shieldUp = true;
let aliensKilled = 0;
let engineTemp = 69.0;

const ALIEN_POINTs = 150;

console.log("____________________");
console.log("\tStats\t");
console.log("____________________");
console.log("Score: ", score);
console.log("Enemy Distance: ", distance);
console.log("Lives: ", lives);
console.log("Aliens Killed: ",aliensKilled);
console.log("Shield Up: ", shieldUp);
console.log("Current Engine Temperature: ", engineTemp);
console.log("Play Again? ", playAgain);

score += 100;
lives ++;              // ++ used as incrimental increase
let bonusLives = lives * 10;

console.log("____________________");
console.log("\tStats\t");
console.log("____________________");
console.log("Score: ", score);
console.log("Enemy Distance: ", distance);
console.log("Lives: ", lives);
console.log("Aliens Killed: ",aliensKilled);
console.log("Shield Up: ", shieldUp);
console.log("Current Engine Temperature: ", engineTemp);
console.log("Bonus: ", bonusLives, "Lives");
console.log("Play Again? ", playAgain);

aliensKilled = 10;
score = aliensKilled + ALIEN_POINTs;
console.log("____________________");
console.log("You've earned an upgrade based on your score of " + score + " points");
console.log("____________________");
console.log("\tStats\t");
console.log("____________________");
console.log("Score: ", score);
console.log("Enemy Distance: ", distance);
console.log("Lives: ", lives);
console.log("Aliens Killed: ",aliensKilled);
console.log("Shield Up: ", shieldUp);
console.log("Current Engine Temperature: ", engineTemp);
console.log("Bonus: ", bonusLives, "Lives");
console.log("Play Again? ", playAgain);