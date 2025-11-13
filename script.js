//chapter 9
//question 1

var city = prompt("enter city name:");
if (city === "karachi") {
    alert("welcome to city of lights");
}   

//question 2
var gender = prompt("enter your gender:");
if (gender === "male") {
    alert("good morning sir");
}
else if (gender === "female") {
    alert("good morning ma'am");
}

//question 3
var color = prompt("enter signal color:");
if (color === "red") {
    alert("must stop");
}
else if (color === "yellow") {
    alert("ready to move");
} 
else if (color === "green") {
    alert("move now");
}

//question 4
var fuel = +prompt("enter remaining fuel in your car:");
if (fuel < 0.25) {
    alert("please refill the fuel in your car");
}

//question 5
//a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//e
if (true){
    alert("true");
}
if (false){
    alert("false");
}

//f
if ("car" < "cat"){
    alert("car is smaller than cat");
}

//question 6
var marks1 = +prompt("enter marks in subject 1:");
var marks2 = +prompt("enter marks in subject 2:");
var marks3 = +prompt("enter marks in subject 3:");
var totalMarks = +prompt("enter total marks:");

var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;
var graderemarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "excellent";    
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "good";    
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "you need to improve";    
}
else {
    grade = "Fail";
    remarks = "sorry";    
}
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

//question 7
var secretnum = 5;
var guess = +prompt("guess the secret number between 1-10:");
if (guess === secretnum) {
    alert("Bingo! correct answer");
}
else if (guess === secretnum + 1) {
    alert("close enough to the correct answer");
}

//question 8
var num = +prompt("enter a number:");
if (num / 3 ){
    alert("number is divisible by 3");
}

//question 9
var num = +prompt("enter a number:");
if (num / 2 ){
    alert("number is even");
}
else if (num / 3 ){
    alert("number is odd");
}

//question 10
var temperature = +prompt("enter the temperature:");
if (temperature > 40) {
    alert("it is too hot outside");
}
else if (temperature > 30) {
    alert("the weather today is normal");
}
else if (temperature > 20) {
    alert("today's weather is cool");
}
else if (temperature > 10) {
    alert("OMG! today's weather is so cool");
}

//question 11
var num1 = +prompt("enter first number:");
var num2 = +prompt("enter second number:");
var operation = prompt("enter operation (+, -, *, /, %):");
var answer;

if (operation === "+") {
    result = num1 + num2;
    alert("result: " + result);
}
else if (operation === "-") {
    result = num1 - num2;
    alert("result: " + result);
}
else if (operation === "*") {
    result = num1 * num2;
    alert("result: " + result);
}
else if (operation === "/") {
    result = num1 / num2;
    alert("result: " + result);
}
else if (operation === "%") {
    result = num1 % num2;
    alert("result: " + result);
}
