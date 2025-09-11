// Singleton

// object litereals

const mySym = Symbol("key1")

const JsUser ={
    name: "Anurag",
    "full name": "Anurag Gupta",
    mySym : "mykey1",// now its datatype is String
    [mySym]: "myValue1", // now its datatype is Symbol
    age: 24,
    location: "Indore",
    email:"anuu9893@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"] 


}

console.log(JsUser.email) // dot notation
console.log(JsUser["email"]) // bracket notation

//console.log(JsUser.full name) // error
console.log(JsUser["full name"]) // bracket notation

console.log(JsUser[mySym]) // bracket notation

console.log(typeof JsUser[mySym]) // datatype is Symbol

JsUser.email = "anuu9994@gmail.com" // update the email

Object.freeze(JsUser) // it will not allow to change any data of object 
JsUser.email = "anuu1111@gmail.com" // it will not change the email

console.log(JsUser); // name: 'Anurag', 'full name': 'Anurag Gupta', mySym: 'mykey1', [Symbol(key1)]: 'myValue1', age: 24, location: 'Indore', email: '
// imp [Symbol(key1)]: 'myValue1' actually a symbol key

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
 // adding function in object

 JsUser.greeting2 = function(){
    console.log(`Hello ${this.name} `); // this is used to access the custom property of an object
 }

 console.log(JsUser.greeting()); // Hello JsUser

 console.log(JsUser.greeting2()); // Hello Anurag