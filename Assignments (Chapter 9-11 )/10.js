// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.” 



let tempInput = prompt("Enter today's temperature:");
let T = Number(tempInput);

if (T > 40) {
    alert("It is too hot outside.");
} 
else if (T > 30) {
    alert("The Weather today is Normal.");
} 
else if (T > 20) {
    alert("Today’s Weather is cool.");
} 
else if (T > 10) {
    alert("OMG! Today’s weather is so Cool.");
}
else {
    alert("It is very cold outside!");
}
