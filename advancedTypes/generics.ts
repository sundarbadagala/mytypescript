function createItems(items:any[]):any[]{
    return new Array().concat(items)
}

let newArray = createItems([1,'a',2,'f']) //it can take both numbers and strings

//----------------Generics--------------

function numberItems<Type>(items:Type[]):Type[]{
    return new Array().concat(items)
}

let numbersArray=  numberItems<number>([1,2,3,4]) //we can assign only numbers not strings
let stringArray=  numberItems<string>(['a','b','c','d']) //we can assign only numbers not strings
