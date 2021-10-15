"use strict";
//---------------------Functions-------------------
//function with params
function sum(a, b) {
    return a + b;
}
sum(12, 23);
//function with params & return type
function subtract(a, b) {
    return a + b;
}
subtract(12, 23);
//function with optional params & return type
function mult(a, b, c) {
    return a * b;
}
mult(12, 23, 34);
//function with return void, i.e it won't return but we can see through console log
function log(message) {
    console.log(message);
}
log('hello');
//function with return nothing
function error() {
    throw new Error('Network Error');
}
let mobile = {
    name: 'redmi',
    cost: 233
};
let addition = (a, b, c) => a + b;
let subtraction = (a, b, c) => a - b;
let users = 'kumar';
let mobiles = {
    name: 'nokia',
    price: 434
};
//---------------------Unknown vs Any-------------------
let userage = 10;
let userage2 = userage;
//or
let userage3 = userage;
let userage4 = 23;
let userage5 = userage4;
