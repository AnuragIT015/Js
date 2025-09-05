// primitive 
// 7 types: String, NUmber, Boolean, null , undefined, Symbol, BigInt

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) // false

// Reference(Non-primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "tony",
    age: 32,
    isActive: true
}

function myFunc(){
    console.log("hello world")
}

console.log(typeof heroes) // object
console.log(typeof myObj) // object
console.log(typeof myFunc) // function
console.log(typeof id) // symbol

//stack vs heap memory
let myNum = 10; // stored in stack memory
