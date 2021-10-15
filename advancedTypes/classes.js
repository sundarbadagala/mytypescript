"use strict";
class Human {
    constructor(name, age, branch) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }
}
let ram = new Human('ram', 23, 'developer');
ram.name = 'ramarao'; //we can access values from class outside the class and we can change it
//by using data modifiers we can't do that
ram.name;
ram.age;
ram.branch;
//we can access those three values and change it
//----------------Data Modifiers-------------
//public --- we can access anywhere : default behaviour
//private --- we can access within that particular class only
//protected -- we can access with that class and that class extened
class Bike {
    constructor(model, power, price) {
        this.model = model;
        this.power = power;
        this.price = price;
    }
}
class Bajaj extends Bike {
    constructor(model, power, price, tyre) {
        super(model, power, price);
        this.tyre = tyre;
    }
    changePower(power) {
        this.power = power; //we can access bike.power in class extended because it protected but we cant access price it is private
    }
}
let bajaj = new Bike('avenger', 160, 42);
bajaj.model; //we can access only model because it is public
//another two one is privete and another one is protected
let pulsar = new Bajaj('pulsar', 150, 10000, 'tubeless');
pulsar.model;
pulsar.tyre;
class Animal {
    constructor(name, type, legs) {
        this.name = name;
        this.type = type;
        this.legs = legs;
    }
}
class Livings {
    constructor(name, type, legs) {
        this.name = name;
        this.type = type;
        this.legs = legs;
        this.name = name;
        this.type = type;
        this.legs = legs;
    }
}
