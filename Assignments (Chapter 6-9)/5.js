//  Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default. 


let userInput = prompt("Enter a number to display its multiplication table:");

let tableNum;
if (userInput === "" || userInput === null) {
    tableNum = 5;
} 
else {
    tableNum = Number(userInput);
}

document.write("<h3>Multiplication Table of " + tableNum + "</h3><br>");
document.write(tableNum + " x 1 = " + (tableNum * 1) + "<br>");
document.write(tableNum + " x 2 = " + (tableNum * 2) + "<br>");
document.write(tableNum + " x 3 = " + (tableNum * 3) + "<br>");
document.write(tableNum + " x 4 = " + (tableNum * 4) + "<br>");
document.write(tableNum + " x 5 = " + (tableNum * 5) + "<br>");
document.write(tableNum + " x 6 = " + (tableNum * 6) + "<br>");
document.write(tableNum + " x 7 = " + (tableNum * 7) + "<br>");
document.write(tableNum + " x 8 = " + (tableNum * 8) + "<br>");
document.write(tableNum + " x 9 = " + (tableNum * 9) + "<br>");
document.write(tableNum + " x 10 = " + (tableNum * 10) + "<br><br>");
