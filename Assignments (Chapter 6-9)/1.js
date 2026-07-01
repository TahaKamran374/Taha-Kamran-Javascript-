// 1. Write a program to take a number in a variable, do the 
// required arithmetic to display the following result in your 
// browser: 

let a = prompt("Enter a number");

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("...........................................<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
