// 4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car” 

let remainingFuel = prompt("Enter remaining fuel in car (in litres, numbers only):");
let fuel = Number(remainingFuel);

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} 
else {
    alert("You have enough fuel to keep driving!");
}

