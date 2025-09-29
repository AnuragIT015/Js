function sayMyName(){
    console.log("A")
    console.log("N")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("G")    
}
sayMyName()

 function addTwoNumbers(number1, number2){  // number1 and number2 are paramenters
    console.log(number1 + number2  );
 }

 addTwoNumbers(4,5) //9
 // 4 and 5 are arguments

 addTwoNumbers(4, "5") // 45

 addTwoNumbers(4,"a") // 4a
 addTwoNumbers(4) // NaN
 addTwoNumbers(3,null) // 3

const ans = addTwoNumbers(3,5)  // function return type is undefined by default
console.log(ans) // undefined

function addTwoNumbers1(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumbers1(3,5)
console.log("Result:", result)// Result: 8

function loginUserMessage(username){
    return `${username} just loggedin`
}
console.log(loginUserMessage("Anurag")) // Anurag just loggedin

console.log(loginUserMessage()) // undefined just loggedin

/*function loginUserMessage(username){
    if(username===undefined){ 
    return "please enter a valid username"
    }
    return `${username} just loggedin`
}
console.log(loginUserMessage()) // please enter a valid username
*/
function calculateCartPrice(...num1){ // ... rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500)) // [ 200, 400, 500 ]

function calculateCartPrice1(discount, ...num1){
    return num1
}

console.log(calculateCartPrice1(10,20,30,40)) // [ 20, 30, 40 ]

const user ={
    username: "Anurag",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyonject.price}`)
}

handleObject(user) // Username is Anurag and price is 199

handleObject({
    username:"anurag",
    price:200
}) //Username is anurag and price is 200

const myArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray)) // 400






