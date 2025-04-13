// Exercise 1: Numbers
var num1 = 7.5;
var num2 = 17;

var sum = num1 + num2;
var diff = num1 - num2;
var prod = num1 * num2;
var quo = num1 / num2;
var mod = num1 % num2;
var exp = num1 ^ num2;

console.log(num1 +" + "+ num2 +" = " + sum)
console.log(num1 +" - "+ num2 +" = " + diff)
console.log(num1 +" x "+ num2 +" = " + prod)
console.log(num1 +" / "+ num2 +" = " + quo)
console.log(num1 +" mod "+ num2 +" = " + mod)
console.log(num1 +" ^ "+ num2 +" = " + exp)

// Exercise 2: Boolean and Operators
var x = 8;
var y = 12;

if(x > y) {
    console.log(x +" is grater than "+ y)
}
if(x <= y) {
    console.log(x +" is less than or equal to "+ y)
}
if(x >= y) {
    console.log(x +" is grater than or equal to "+ y)
}

if(x == y) {
    console.log(x +" is equal to "+ y)
}
if(x != y) {
    console.log(x +" is not equal to "+ y)
}

var a = true;
var b = false;

if(a && b) {
    console.log(a +" AND "+ b)
}
if(a || b) {
    console.log(a + " OR "+ b)
}    
if(!a) {
    console.log("!" + a + "is " + !a )
}

var p = 10;
var l = 5;
console.log(p + "+" + l + "=")
console.log(p + "-" + l + "=")
console.log(p + "*" + l + "=")
console.log(p + "/" + l + "=")
console.log(p + "%" + l + "=")
