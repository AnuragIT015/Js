const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString())// '100'
console.log(balance.toString().length)//3  

console.log(balance.toFixed(2))// '100.00'

const otherNumber = 123.123456;

console.log(otherNumber.toPrecision(2))// '1.2e+2'
console.log(otherNumber.toPrecision(5))// '123.12'

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'))//'10,00,000'
console.log(hundreds.toLocaleString('de-DE'))//'1.000.000'
console.log(hundreds.toLocaleString('ar-EG'))//'١٬٠٠٠٬٠٠٠'

// ++++++++++++ Maths +++++++++++++++

console.log(Math) // Math object

console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045

console.log(Math.abs(-100)) // 100

console.log(Math.round(4.6)) // 5

console.log(Math.ceil(4.1)) // 5
console.log(Math.floor(4.9)) // 4

console.log(Math.min(2,34,5,6,-100)) // -100
console.log(Math.max(2,34,5,6,-100)) // 34

console.log(Math.random()) // random number between 0 to 1

console.log((Math.random()*10)+1) // random number between 1 to 10

const min  = 20
const max = 30
console.log(Math.floor(Math.random()*(max-min+1))+min) // random number between 20 to 30


