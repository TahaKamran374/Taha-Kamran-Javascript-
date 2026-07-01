// 7.  Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 


let price1 = 650;
let qty1 = 3;
let price2 = 100;
let qty2 = 7;
let shipping = 100;

let totalCost = (price1 * qty1) + (price2 * qty2) + shipping;

document.write("<h1>Shopping Cart</h1><br>");
document.write("Price of item 1 is " + price1 + "<br>");
document.write("Quantity of item 1 is " + qty1 + "<br>");
document.write("Price of item 2 is " + price2 + "<br>");
document.write("Quantity of item 2 is " + qty2 + "<br>");
document.write("Shipping Charges " + shipping + "<br><br><br>");
document.write("Total cost of your order is " + totalCost + "<br><br>");
