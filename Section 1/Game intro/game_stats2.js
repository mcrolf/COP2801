// Game Statistics 2
// demonstrates arithmatic operations with variables

let score = 0;         // initialize score at zero
let distance = 0;
let playAgain = "y";
let lives = 3;
let shieldUp = true;
let aliensKilled = 0;
let engineTemp = 69.0;

console.log("\tStats\t");
console.log("____________");
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