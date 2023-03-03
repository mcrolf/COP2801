// Program1_2          COP2801
// Michael Napoli      2275778

/* Assume that Professor Tillman could run 10 kilometers 
in 55 min and 30 seconds when he lived in Germany. However, 
he never understood how many miles that was. Write the code 
that will display his average speed in mph.*/

// Initial constants
const initD_km = 10;
const initT_min = 55.5;

// Unit conversions
let km_to_mi = initD_km * 0.621371;
let min_to_hr = initT_min / 60;

let mi_per_hr = km_to_mi / min_to_hr;

// Output to terminal
console.log("Professor Tillman ran 10Km in 55 min and 30 sec.")
console.log("His speed in miles per hour is: " + mi_per_hr.toFixed(2) + " mph"); // speed to 2 decimal places