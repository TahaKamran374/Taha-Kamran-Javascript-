// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored 
// values. 
// Output them to the screen like so: “They are either NN or NN 
// years old”. 


let currentYear = 2016;
let birthYear = 1992;

let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.write("<h1>Age Calculator</h1><br><br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age1 + "<br><br>");

document.write("They are either " + age2 + " or " + age1 + " years old.<br><br>");
