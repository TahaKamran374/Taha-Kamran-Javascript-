// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero. 


let userInput = prompt("Enter a number:");
let num = Number(userInput);

if (num > 0) {
    alert("The number is positive.");
} 
else if (num < 0) {
    alert("The number is negative.");
} 
else {
    alert("The number is zero.");
}
