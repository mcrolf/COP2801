// Program1_3          COP2801
// Michael Napoli      2275778

/* I did a study for my PhD dissertation and collected the following population data.
There was one birth every 7 seconds for the individuals I studied.
There was one death every 30 seconds for the individuals I studied.
Every 60 seconds, a new immigrant entered the country.
Display what the population will be ten years from now. 
You can assume that the current population I'm using is 412,000,000.*/

// constants
const births = 1;
const deaths = 1;
const immigration = 1;
const sec_yr = 31622400;
const init_pop = 412000000; 

// variables to be converted
let births_sec = births/7;
let deaths_sec = deaths/30;
let immigration_sec = immigration/60;

// conversion
let pop_ten = init_pop + (births_sec * 10 * sec_yr) + (immigration_sec * 10 * sec_yr) - (deaths_sec * 10 * sec_yr);

console.log("The population starts at: " + init_pop);
console.log("The population after 10 years is : "+ pop_ten.toFixed(0)); // population displays whole number value