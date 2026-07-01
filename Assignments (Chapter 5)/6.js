// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”. 


let celsius = 25;
let fahrenheitFromCelsius = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br><br>");

let fahrenheit = 70;
let celsiusFromFahrenheit = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusFromFahrenheit + "°C<br><br>");
