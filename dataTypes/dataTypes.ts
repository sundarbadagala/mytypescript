//-------------------String------------------------
let a='hello world'
a='hi'  //we cant assign any ohter data types to that variable rather than string, otherwise it will throw error

let a1:string='hi'
a1='bye'

//-------------------Number------------------------
let b = 23
b=43

let b1:number=32
b1=43

//-------------------Boolean------------------------
let c= true
c=false

//-------------------Any------------------------
let d:any = 10
d='hello'
d=[1,2,3]   //any breaks the static checking feature, means we can reassign any datatype to that variable
            //not recommended in Typescript

//-------------------Array------------------------
let e:number[] =[1,2,3,4] //we can reassign only numbers in that array, but not any string values
e=[3,4,5]

let f:string[] = ['a','b','c','d']
f=['hello','hi','hey']

let g:any[] = [1,'a','b',3]

//-------------------Tuples------------------------
let h:[string, number] = ['a',4]   //fixed length and data types of array
h=['c',9]

let i:[string, number][]=[]
i=[['a',1],['b',2]]
i=[['c',3],['d',4],['e',5]]

//-------------------Union------------------------
let j:string|number = 'hello'
j=23        //we can assign both string and number data types to that particular variable but not rather than string and number like array, object etc
j='hi'

//-------------------Enum------------------------
const RED='Red'      //mainly used for constants
const BLUE='Blue'
enum Colors{       
    RED='Red',
    BLUE='Blue',
    GREEN='Green'
}                   //we can't reassign any values to that particular values because they act as constannts
                    // Colors.RED='string' will throw error because those are constants

//-------------------Object Type Inference------------------------
let car={
    name:'Audi',
    price:1000000
}
car={
    name:'Benz',
    price:99999999
}
car.name='Honda'

//-------------------Object Type Assignment------------------------
type Student={
    name:string,
    age:number
}
let student:Student={
    name:'arun',
    age:34
}
student.name='vijay'

//-------------------Type Assertion------------------------
//will help to convert one data type to another data type
let u_name:any='Ajay'
let i_name:number=<number>u_name
//let i_name:number = u_name as number
let m_name:string=<string>u_name
//let m_name:number = u_name as string

//-------------------Null & Undefined------------------------
let n:null=null

let u:undefined=undefined