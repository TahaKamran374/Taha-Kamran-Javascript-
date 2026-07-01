// // 6. Take 
// // a) Take three subjects name from user and store them in 3 
// // different variables. 
// // b) Total marks for each subject is 100, store it in another 
// // variable. 
// // c) Take obtained marks for first subject from user and 
// // stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables. 
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table) 


let sub1 = prompt("Enter first subject name:");
let sub2 = prompt("Enter second subject name:");
let sub3 = prompt("Enter third subject name:");

let totalPerSubject = 100;

let marks1 = Number(prompt("Enter obtained marks for " + sub1 + ":"));
let marks2 = Number(prompt("Enter obtained marks for " + sub2 + ":"));
let marks3 = Number(prompt("Enter obtained marks for " + sub3 + ":"));

let pct1 = (marks1 / totalPerSubject) * 100;
let pct2 = (marks2 / totalPerSubject) * 100;
let pct3 = (marks3 / totalPerSubject) * 100;

let grandTotalMarks = totalPerSubject * 3;
let grandObtainedMarks = marks1 + marks2 + marks3;
let grandPercentage = (grandObtainedMarks / grandTotalMarks) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalPerSubject + "</td><td>" + marks1 + "</td><td>" + pct1 + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalPerSubject + "</td><td>" + marks2 + "</td><td>" + pct2 + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalPerSubject + "</td><td>" + marks3 + "</td><td>" + pct3 + "%</td></tr>");
document.write("<tr><th></th><th>" + grandTotalMarks + "</th><th>" + grandObtainedMarks + "</th><th>" + grandPercentage + "%</th></tr>");
document.write("</table>");
