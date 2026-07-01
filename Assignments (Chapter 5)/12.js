// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and 
// output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)



let radius = 20;
let pi = 3.142;

let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1><br><br>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");
