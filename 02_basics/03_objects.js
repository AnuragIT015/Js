// Singleton

// object litereals

const mySym = Symbol("key1")

const JsUser ={
    name: "Anurag",
    "full name": "Anurag Gupta",
    mySym : "mykey1",// now its datatype is String
    [mySym]: myValue1, // now its datatype is Symbol
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

JsUser.email = "anuu9994@gmail.com"

