// 9. Write a program that checks whether the given input is an 
// even number or an odd number. 


let userInput = prompt("Enter a number:");
let num = Number(userInput);

let half = num / 2;

if (Number.isInteger(half)) {
    alert(num + " is an even number.");
} 
else {
    alert(num + " is an odd number.");
}
