//---------------------Functions-------------------

//function with params
function sum(a:number,b:number){ 
    return a+b
}
sum(12, 23)

//function with params & return type
function subtract(a:number,b:number):number{ 
    return a+b
}
subtract(12, 23)

//function with optional params & return type
function mult(a:number,b:number, c?:number):number{
    return a*b
}
mult(12, 23, 34)

//function with return void, i.e it won't return but we can see through console log
function log(message:string):void{
    console.log(message)
}
log('hello')

//function with return nothing
function error():never{
    throw new Error('Network Error')
}

//---------------------Interfaces-------------------
interface mobileInterface{
    name:string,
    cost:number
}
let mobile:mobileInterface={
    name:'redmi',
    cost:233
}

//Appyling Interface to functions
interface sumFunction{
    (a:number, b:number, c?:number):number
}
let addition:sumFunction=(a, b, c?)=>a+b
let subtraction:sumFunction=(a, b, c?)=>a-b

//---------------------Custom Types-------------------
type usersType=string
let users:usersType='kumar'

type mobileType={
    name:string,
    price:number
}
let mobiles:mobileType={
    name:'nokia',
    price:434
}

//---------------------Unknown vs Any-------------------
let userage:unknown =10
let userage2:number = userage as number
//or
let userage3:number= <number>userage

let userage4:any=23
let userage5:number= userage4