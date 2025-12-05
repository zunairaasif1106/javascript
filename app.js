//chapter 21 to 25
//q1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = (firstName + lastName);
alert("Have a nice day!" + fullName );

//q2
var favph = prompt("Enter your favorite mobile model:");
document.write("My favorite phone is: " + favph + "<br>");

//q4
var string = "Hello World";
document.write("String: " + string + "<br>");
document.write("Last index of 'l': " + string.lastIndexOf('l') + "<br>");

//q5
var country = "Pakistani";
document.write("String: " + country + "<br>");
document.write("Character at index 3: " + country.charAt(3) + "<br>");

//q7
var city = "Hyderabad";
var City2 = city.replace("Hyder", "Islam");
document.write("City: " + city+ "<br>");
document.write("After replacement: " + City2 + "<br>");

//q8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var message2 = message.replace(/and/g, "&");
document.write(message2 + "<br>");

//q9
var string = "472";
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof(string) + "<br>");
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof(Num) + "<br>");

//q10
var userInput = prompt("Enter any word:");
var uppCse = userInput.toUpperCase();
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + uppCse + "<br>");

// //q11
var number = 35.36 ;
var string = number.toString().replace(".");
document.write("Number: " + number + "<br>");
document.write("Result: " + string + "<br>");

