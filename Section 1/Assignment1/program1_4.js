// Program1_4          COP2801
// Michael Napoli      2275778

/* Linear equations are very useful in Algebra. I've been working on a homework assignment but I can't solve it. 
I was told that I could use Cramer's rule to solve a 2 X 2 linear equation. The equation is:
x = ed - bf / ad - bc 
y = af - ec / ad  - bc

for a equation in the form:
ax + by = e
cx + dy = f

can you help me solve the following equation for x and y:
3.4x + 50.2y = 44.5
2.1x + .55y = 5.9  */

// variables
let a = 3.4;
let b = 50.2;
let c = 2.1;
let d = .55;
let e = 44.5;
let f = 5.9;

// constants for Cramer's Rule
const x = (e*d - b*f)/(a*d - b*c);
const y = (a*f - e*c)/(a*d - b*c);

// display x and y to 2 decimal places
console.log("x= " + x.toFixed(2));
console.log("y= " + y.toFixed(2));