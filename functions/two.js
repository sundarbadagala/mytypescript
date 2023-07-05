"use strict";
const details = {
    name: 'vijay',
    age: 23,
    isMajor: true
};
const fnOne = (details) => {
    return `name ${details.name}, age ${details.age}, is major ${details.isMajor ? 'yes' : 'no'}`;
};
// console.log(fnOne(details))
//================================================================================================
const detailsOps = {
    name: 'vijay',
};
const detailsOpsTwo = {
    name: 'vijay',
    age: 23
};
const fnTwo = (details) => {
    return `name ${details.name}, age ${details.age}, is major ${details.isMajor ? 'yes' : 'no'}`;
};
// console.log(fnTwo(detailsOps))
// console.log(fnTwo(detailsOpsTwo))
