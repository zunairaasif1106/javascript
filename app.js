//chapter 1
//task 1
alert("welcome to javascript!");

//task 2
var userName = prompt("Please enter your name:");
alert(userName + " " + "welcome");

//task 3
var color = prompt("what's your fav colour?");
alert("your fav colour is" + " " + color);


//chapter 2
//task 1
var firstName = "zunaira";
var lastName = "Asif";
alert(firstName + " " + lastName);

//task 2
var city = "karachi";
alert ("city name" + " " + city);

//task 3
var hobby = "learning Turkish";
alert("my hobby is" + " " + hobby);

//chapter 3
//task 1
var a = 11;
var b = 11;
var total = a + b;
alert (total);

//task 2
var mark = 80;
var marks = prompt("enter your marks");
if (marks >= 50){
    alert("pass");
}
else {
    alert("fail");
}

//task 3
var no = 20;
var age = prompt("enter your age");
if (age >= 18){
    alert("you're above 18");
}


//chapter 4
//task 1
var userName = "zunaira";
var $age = "19";
var _color = "black"
alert (userName + " " + $age + " " + _color);

//task 2
var 3name = "zunaira";
var var = "black";
var color% = "10";
alert( 3name + " " + var + " " + color%);

//task 3
var variableName = ["zunaira" , "asif"];
alert ( variableName);


//chapter5
//task 1
var no1 = "16";
var no2 = "18";
var sum = no1 + no2;
alert(sum);

//task 2
var no1 = "16";
var no2 = "18";
var product = no1 * no2;
var quotent = no1 / no2;
var remainder = no1 % no2;
alert( product + "<br>" + quotent + "<br" + remainder);

//task 3
var num = 5;
num++;
alert(num);


//chapter6
//task 1
var nu = 10;
nu++;
alert(nu++);
nu--;
alert(nu--);


//chapter 7
//task 1
var x = 15;
var y = 30;
var z = 12;
var ans = (x + y) * z;
alert("Result: " + ans);

//task 2
var i = 10;
var j = 11;
var k = 12;
var l =13;
var result = i + j * k - l;
alert (result);


//chapter 8
//task 1
var userName = "zunaira";
var lastName = "asif"
var fullName = userName + " " + lastName;
alert("full name" + fullName);

//task 2
var city = "karachi";
var greet = "welcome";
alert(city + " " + greet);

//task3
var a = "welcome";
var b = "to";
var c = "karachi";
alert(a + " " + b + " " + c)


//chapter 9
//task 1
var color = prompt ("enter your fav colour");
alert ("tour fav colour is" + " " + color);

//task 2
var age = prompt ("enter your age");
alert ("your age is" + " " + age);

//task 3
var fruit = prompt("enter your fav fruit");
alert("your fav fruit is" + " " + fruit);


//chapter 10
//task 1
var num = prompt("enter a no");
if (num > 10){
    alert("number is greater than 10");
}

//task 2
var mark = 80;
var marks = prompt("enter your marks");
if (marks >= 50){
    alert("pass");
}

//task 3
var no = 20;
var age = prompt("enter your age");
if (age <= 18){
    alert("minor");
}

//chapter 11
//task 1
var numb1 = 12;
var numb2 = 8;
var result = numb1 > numb2;  
alert(result);

//task 2
var c = 10;
var d = 10;
if (c == d) {
    alert("equal");
}
else{
    alert("not equal");
}

//chapter 12
//task 1
var number = +prompt ("enter your marks");
if (number >= 90) {
    alert ("A");
} 
else if (number >= 70){
    alert("B");
}
else{
    alert("C");
}

//task 2
var age = +prompt ("enter your age");
if (age <= 12){
    alert("child")
}
else if (age <= 18){
    alert("teen")
}
else {
    alert("adult")
}

//task 3
var temp = +prompt("enter temperature");
if (temp >= 40){
    alert("hot")
}
else if (temp >= 30){
    alert("warm")
}
else if (temp >= 20){
    alert("cold");
}

//chapter 13
//task 1
var num = +prompt("enter a number")
if (num % 2){
    alert("number is positive and even");
}

//task 2
var num = +prompt("enter a number");
num = num
if (num % 3 == 0 && num % 5 == 0){
    alert("The number is divisible by both 3 and 5");
}

//chapter 14
//task
var age = prompt("Enter your age:");
var id = prompt("Do you have an ID? (true/false)");
age = Number (age);
if (age >= 18) {
    if (id === "true") {
        alert("Allowed");
    } 
}
 else {
    alert("Not Allowed");
}

//task 2
var num = prompt("Enter a number:");
num = Number(num);
if (num > 0) {
    if (num % 2 === 0) {
        alert("The number is positive");
        
    }
} 
else {
    alert("The number is not positive");
}

//chapter 15
//task 1
var array = ["apple", "banana", "grapes", "orange", "dragon fruit"];
alert(array);

//task 2
var array = [1, 2, 3, 4, 5, 6];
alert(0,5);

//task3
var colours = ["red", "yellow", "purple", "pink"];
alert(colours);


//chapter 16
//task 1
var fruits = ["apple", "papaya", "cherry", "kiwi"];
fruits.push("orange");
alert(fruits);

//task 2
var fruits = ["apple", "papaya", "cherry", "kiwi"];
fruits.pop();
alert(fruits);

//task 3
var fruits = ["apple", "papaya", "cherry", "kiwi"];
fruits.unshift(watermelon);
fruits.shift();
alert(fruits);


//chapter 17
//task 1
var pets = ["cat" , "dog" , "duck"];
pets.splice(1, 0, fish);
alert(pets);

//task 2
var pets = ["cat" , "dog" , "fish"];
pets.splice = (2,1);
alert (pets);

//task 3
var pets = ["cat" , "dog" , "fish"];
pets.slice = (0,2);
alert(pets);


//chapter 18
//task 1
for (let i= 5; i <= 5; i++ ){
    alert (i);
}

//task 2
let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
    alert(fruits[i]);
}

//task 3
for (let i = 1; i <= 10; i++){
    alert(i);
}


//chapter 20
//task 1
var number = +prompt("Enter a number for multiplication:");
var length = +prompt("Enter length");
for (var i = 1; i <= length; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

//chapter 21
//task 1
let str = "hi";
str.toUpperCase();
alert(str);

//task 2
let string = "HI";
string.toLowerCase();
alert(string);