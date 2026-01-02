//chapter 38-42
//functions-switch-while.. do-while

//task 1
function power(a, b) {
    return(a, b);
}
console.log(power(4,4 ));

//task 2
function leapYear(year) {
    if(year % 4 === 0) {
        return year + " is a leap year";
    } else {
        return year + " is not a leap year";
    }
}
console.log(leapYear(2020));


//task 3
function area(a, b, c) {
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    let s = (a + b + c) / 2;
    return area;
}
console.log(area(13, 24, 5));

//task 4
function main (mark1, mark2, mark3){
let average = average (mark1, mark2, mark3);
let percentage = percentage (mark1, mark2, mark3);
return  average +  percentage ;
}
function average (mark1, mark2, mark3){
return (mark1 + mark2 + mark3) / 3;
}
function percentage (mark1, mark2, mark3){
let total= 300;
let obtained = mark1 + mark2 + mark3;
return (obtained / total) * 100;
}

console.log(main(85, 90, 95));

//task 5
function index(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            return i;
        }
    }
    return -1;
}
console.log(index("welcome", "e"));

//chapter 43-48
//events
//task 1
function showAlert() {
    alert("thanks for click");
}

//task 2
// Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
function image() {
    alert("thanks for purchase a phone from us");
}

//task 3
function deleteRow(r) {}

//task 4
//index.html

