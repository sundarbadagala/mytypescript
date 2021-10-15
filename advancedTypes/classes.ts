class Human{
    name: string
    age:number
    branch:string
    constructor(name:string, age:number, branch:string){
        this.name = name
        this.age = age
        this.branch = branch
    }
}

let ram = new Human('ram', 23, 'developer')

ram.name='ramarao'  //we can access values from class outside the class and we can change it
//by using data modifiers we can't do that
ram.name
ram.age
ram.branch
//we can access those three values and change it



//----------------Data Modifiers-------------
//public --- we can access anywhere : default behaviour
//private --- we can access within that particular class only
//protected -- we can access with that class and that class extened


class Bike{
    model:string
    protected power:number
    private price:number
    constructor(model:string, power:number, price:number){
        this.model=model
        this.power=power
        this.price=price
    }
}

class Bajaj extends Bike{
    tyre:string
    constructor(model:string, power:number, price:number, tyre:string){
        super(model, power, price)
        this.tyre = tyre
    }
    changePower(power:number){
        this.power = power  //we can access bike.power in class extended because it protected but we cant access price it is private
    }

}



let bajaj = new Bike('avenger', 160, 42)
bajaj.model //we can access only model because it is public
//another two one is privete and another one is protected
let pulsar = new Bajaj('pulsar', 150, 10000, 'tubeless')
pulsar.model
pulsar.tyre


//-----------------Apply Interface in Class-------------

interface animalInterface{
    name:string
    type:string
    legs:number
}

class Animal implements animalInterface{
    name: string
    type:string
    legs:number
    constructor(name:string, type:string, legs:number){
        this.name = name
        this.type = type
        this.legs = legs
    }
}
//------------------Class in Simple Format------------

interface livingInterface{
    name:string
    type:string
    legs:number
}

class Livings implements livingInterface{
    constructor(public name:string, public type:string, public legs:number){
        this.name = name
        this.type = type
        this.legs = legs
    }
}