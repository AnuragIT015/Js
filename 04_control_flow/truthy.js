const userEmail = "an@gmail.com"

if(userEmail){
    console.log("You have an email")    
}
else{
    console.log("You don't have an email")  
} // You have an email

//falsy valuse

// false,0,"",null,-0,BigInt 0n,undefined,NaN

//Truthy valuse

// true,{},[],function(){},1,-1,"hello", " ", -Infinity, Infinity

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")  
} // Object is empty

// false==0 true
// false =='' true
// 0 == '' true

//Nullish Coalescing Operator(??):: null undefined

let val1;
val1= 5??10
console.log(val1) // 5

let val2;
val2= null??10
console.log(val2) // 10

val1 = null ?? 5?? 10
console.log(val1) // 5
 
// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80") // more than 80