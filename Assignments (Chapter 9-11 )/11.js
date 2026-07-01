// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user. 


let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operation = prompt("Enter operation symbol (+, -, *, /, %):");

let result;

if (operation === "+") {
    result = num1 + num2;
} 
else if (operation === "-") {
    result = num1 - num2;
} 
else if (operation === "*") {
    result = num1 * num2;
} 
else if (operation === "/") {
    result = num1 / num2;
} 
else if (operation === "%") {
    result = num1 % num2;
} 
else {
    alert("Invalid operation symbol entered.");
}

if (result !== undefined) {
    alert("The result is: " + result);
}

