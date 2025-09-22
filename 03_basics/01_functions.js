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






