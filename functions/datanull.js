"use strict";
const datanull = [
    { name: 'kiran', age: 23, isMajor: true, color: null },
    { name: 'charan', age: 3, isMajor: false, color: 'blue' },
    { name: 'varun', age: 99, isMajor: true, color: null },
    { name: 'saran', age: 23, isMajor: true, color: 'yellow' },
];
const fnDataNull = (data) => {
    return data.map((item) => item.color);
};
console.log(fnDataNull(datanull));
