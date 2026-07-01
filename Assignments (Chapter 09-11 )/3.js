// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:


let signalColor = prompt("Enter a traffic signal color (Red, Yellow, or Green):");

if (signalColor === "Red") {
    alert("Must Stop");
} 
else if (signalColor === "Yellow") {
    alert("Ready to move");
} 
else if (signalColor === "Green") {
    alert("Move now");
} 
else {
    alert("Invalid color entered.");
}
