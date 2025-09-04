/*
// **************** Conversion of datatypes ****************

// conversion operation

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

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber) // string
// 33 => "33"
// true => "true"; false =  > "false" 
// null => "null"; undefined => "undefined"
*/
// **************** Operations ****************

let value = 3
let negValue = -value
console.log(negValue) // -3
console.log(-negValue) // 3

let str = "hello "
let str2 = "world "
let str3 = str + str2
console.log(str3) // hello world

console.log("1" + 2) // "12"
console.log(1 + "2") // "12"
console.log("1" + 2 + 2) // "122"
console.log(1 + 2 + "2") // "32"

console.log(3 - "1") // 2
console.log("3" - 1) // 2
console.log("3" - "1") // 2
console.log("hello" - "world") // NaN

console.log(+true) // 1
console.log(+"") // 0

let num1,num2,num3
num1 = num2 = num3 = 2 + 2
console.log(num1,num2,num3) // 4 4 4

let gameCounter = 100
gameCounter++
console.log(gameCounter) // 101
gameCounter--
console.log(gameCounter) // 100

console.log(3 * "8") // 24
console.log("24" / 6) // 4
console.log(2 ** 3) // 8
console.log(27 ** (1/3)) // 3

//link to study
