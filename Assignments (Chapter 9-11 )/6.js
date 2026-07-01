// // 6. Write a program to take input the marks obtained in three 
// // subjects & total marks. Compute & show the resulting 
// // percentage on your page. Take percentage & compute 
// // grade as per following table:
// Show the total marks, marks obtained, percentage, grade & 
// remarks like: 


let totalMarks = Number(prompt("Enter total marks for three subjects:"));
let marksObtained = Number(prompt("Enter total marks obtained:"));

let percentage = (marksObtained / totalMarks) * 100;

let grade;
let remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} 
else if (percentage >= 70) {
    grade = "B";
    remarks = "You need to improve";
} 
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} 
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1><br><br>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + marksObtained + "<br>");
document.write("Percentage : " + percentage + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br><br>");
