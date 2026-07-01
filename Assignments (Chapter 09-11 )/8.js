// 8. Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number 
// is divisible by 3. 


let userInput = prompt("Enter a number to check if it is divisible by 3:");
let num = Number(userInput);

let dividedValue = num / 3;

if (Number.isInteger(dividedValue)) {
    alert("The number " + num + " is divisible by 3.");
}
