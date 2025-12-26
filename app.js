//chapter 35-38
//q 1
let Date = new Date();
document.write(currentDate);

//q 2
let fname = propmt("enter your first name");
let lname = prompt("enter your last name");
let fullname = fname + " " + lname;
alert ("welcome" + " " + fullname);

//q3
function add() {
let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
return num1+num2
}
let a = add();
alert (a);

//q4
function calc(num1, num2, opr) {
  if (opr === "+") {
    return num1 + num2;
  } else if (opr === "-") {
    return num1 - num2;
  } else if (opr === "*") {
    return num1 * num2;
  } else {
    return "Incorrect operator!";
  }
}
let fnum = +prompt("Enter first number:");
let snum = +prompt("Enter second number:");
let operator = prompt("Enter operator (+, -, *):");

alert(calc(fnum, snum, operator)
);

//q5
function square (num){
    return num * num;
}
let number = +prompt ("enter a number for square")
alert (number + square(number));

//q6
function factorial(n) {
  let result = 1;             
  for (let i = 1; i <= n; i++) {  
    result = result * i;      
  }
  return result;              
}

let num = +prompt("Enter a number:");
alert( factorial(number));

//q7
function area(width, height) {
  return width * height;
}
let area1 = area(12, 9); 
alert(area1);

//q8