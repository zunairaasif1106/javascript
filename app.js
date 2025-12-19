//chapter
//question 1 
let num = +(prompt("enter a positive number"));
document.write("number" + num + "<br>")
document.write("round off value of the number" + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));

//question 2
let no = +(prompt("Enter a negative number:"));
document.write("Number: " + no + "<br>");
document.write("Round off value: " + Math.round(no) + "<br>");
document.write("Floor value: " + Math.floor(no) + "<br>");
document.write("Ceil value: " + Math.ceil(no));

//question 3
 let absnum = +prompt("Enter a number:");
 document.write("Number: " + absnum + "<br>");
 document.write("Absolute value: " + Math.abs(absnum));

//question 4
let dice = Math.floor(Math.random() * 6) + 1;
document.write("Dice Value: " + dice);

//question 5
let random = Math.floor(Math.random() * 100) + 1;
document.write("Random Number: " + random);

//chapter
//question 1
let Date = new Date();
document.write(currentDate);

//question 2
let month = new Date();
let newMonth = now.getDay();
document.write(newMonth);

//question 3
let today = new Date();
let day = day.getDay();
alert("Today is: " + day);

//question 4
let day = new Date();
let date = today.getDate();
if (date < 16) {
    document.write("First fifteen days of the month");
 } else {
    document.write("Last days of the month");
};

//question 5
let now = new Date();
let hour = now.getHours();
    if (hour < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    };

