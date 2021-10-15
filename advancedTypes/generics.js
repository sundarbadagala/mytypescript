"use strict";
function createItems(items) {
    return new Array().concat(items);
}
let newArray = createItems([1, 'a', 2, 'f']); //it can take both numbers and strings
//----------------Generics--------------
function numberItems(items) {
    return new Array().concat(items);
}
let numbersArray = numberItems([1, 2, 3, 4]); //we can assign only numbers not strings
let stringArray = numberItems(['a', 'b', 'c', 'd']); //we can assign only numbers not strings
