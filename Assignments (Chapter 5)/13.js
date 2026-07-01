// 13. The Lifetime Supply Calculator: Ever wonder how 
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of 
// your life. 
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”. 


let favSnack = "chocolate chip";
let currentAge = 15;
let maxAge = 65;
let amountPerDay = 3;

let totalSnacks = (maxAge - currentAge) * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br><br>");

document.write("You will need " + totalSnacks + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br><br>");
