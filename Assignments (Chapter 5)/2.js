// 2. Repeat task1 for subtraction, multiplication, division & 
// modulus. 

var num1 = Number(prompt("Enter A number"));
var num2 = Number(prompt("Enter Second number"));

var sum = num1 + num2;
var diff = num1 - num2;
var prod = num1 * num2;
var quot = num1 / num2;
var mod = num1 % num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");
document.write("Result of subtracting " + num2 + " from " + num1 + " is " + diff + "<br><br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + prod + "<br><br>");
document.write("Division of " + num1 + " by " + num2 + " is " + quot + "<br><br>");
document.write("Remainder of " + num1 + " divided by " + num2 + " is " + mod + "<br><br>");
