//chapter 14
//arrays
//question 1-2
var students =[]
console.log(students);


//question 3
var stringarray = ["ayesha","zunaira","sana","hira"]
console.log

//question 4
var numberarray = [6, 22, 26, 10, 7];
console.log(numberarray);

//question 5
var booleanarray = [true, false];
console.log(booleanarray);

//question 6
var mixedarray = ["zunaira", 11, 12, "huzaifa", false];
console.log(mixedarray);

//question 7
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("qualification" + "<br>" + qualification [0]+"<br>")
document.write(qualification[1]+"<br>")
document.write(qualification[2]+"<br>")
document.write(qualification[3]+"<br>")
document.write(qualification[4]+"<br>")
document.write(qualification[5]+"<br>")
document.write(qualification[6]+"<br>")
document.write(qualification[7]+"<br>")

//question 8
var studentname = ["michael", "john", "tony"];
var studentmarks = [320, 230, 480];
document.write("score of " + studentname[0] + " is " + studentmarks[0] + " Percentage: " + (studentmarks[0]/500*100) + "%" + "<br>");
document.write("score of " + studentname[1] + " is " + studentmarks[1] + " Percentage: " + (studentmarks[1]/500*100) + "%" + "<br>");
document.write("score of " + studentname[2] + " is " + studentmarks[2] + " Percentage: " + (studentmarks[2]/500*100) + "%" + "<br>");

//question 9
var colornames = ["pink", "white", "black"];
document.write(colornames + "<br>");

//a
var colorbegin = prompt("which color you want to add to the beginning?");
colornames.unshift(color);
document.write(colornames + "<br>");

//b
var colorend = prompt("which color you want to add to the end?");
colornames.push(colorend);
document.write(colornames + "<br>");

//c
colornames.unshift("purple", "yellow");
document.write(colornames + "<br>");

//d
colornames.shift();
document.write(colornames + "<br>");

//e
colornames.pop();
document.write(colornames + "<br>");


