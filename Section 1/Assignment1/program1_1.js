// Program1_1             COP2801
// by: Michael Napoli     2275778

// This program displays the result for a mathematical equation.
// The equation is 4*(1- 1/3 + 1/5 - 1/7 + 1/9 - 1/11)

// creating a constant for the scalar multiple
const scalar = 4;

// creating a constant for the problem being multiplied by the scalar
const mult = (1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11));

// letting the variable called answer be equal to the scalar times mult
let answer = scalar * mult;

// output answer to terminal
console.log(answer);
console.log("Now rounded to two decimal places");
console.log(answer.toFixed(2));