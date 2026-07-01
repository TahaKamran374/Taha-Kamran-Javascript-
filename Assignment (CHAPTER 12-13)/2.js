// 2. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.

let num1 =prompt("Enter A Number");
let num2 =prompt("Enter Second Number");

if (num1 > num2) {
    alert(num1 + " is larger than " + num2);
} 
else if (num2 > num1) {
    alert(num2 + " is larger than " + num1);
} 
else {
    alert("Both numbers are equal.");
}
