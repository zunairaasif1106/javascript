//chapter 17
//question 1
var multiArray = []

//question 2
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

//question 3
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//question 4
var number = +prompt("Enter a number for multiplication:");
var length = +prompt("Enter length");
for (var i = 1; i <= length; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

//question 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var a = 0; a < fruits.length; a++) {
    console.log("Element at index " + a + " is " + fruits[a]);
}

//question 6
for (var i = 1; i <= 15; i++) {
    console.log(i);
    document.write(i );
}

//b. reverse counting
for (var i = 10; i >= 1; i--) {
    console.log(i);
    document.write(i );
}

//c. even
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
    document.write(i );
}

//d. odd
for (var i = 1; i < 20; i += 2) {
    console.log(i);
    document.write(i );
}

//e. series
for (var i = 2; i <= 20; i += 2) {
    console.log(i + "k");
    document.write(i + "k ");
}

//question 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

