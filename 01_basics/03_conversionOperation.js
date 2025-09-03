let score = "33abc"
console.log(typeof score) // string

let valueInNumber = Number(score)       
console.log(typeof valueInNumber) // number
console.log(typeof score) // string

console.log(valueInNumber) 
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true
console.log(typeof booleanIsLoggedIn) // boolean
// 1 => true; 0 => false
// "abc" => true; "" => false

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(typeof stringNumber) // string
// 33 => "33"
// true => "true"; false =  > "false" 
// null => "null"; undefined => "undefined"

// Type coercion