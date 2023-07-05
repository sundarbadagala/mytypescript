"use strict";
const data = [
    { name: 'kiran', age: 23, isMajor: true, color: 'red' },
    { name: 'charan', age: 3, isMajor: false, color: 'blue' },
    { name: 'varun', age: 99, isMajor: true, color: 'green' },
    { name: 'saran', age: 23, isMajor: true, color: 'yellow' },
];
const fnData = (data) => {
    return data.map((item) => item.name);
};
console.log(fnData(data));
