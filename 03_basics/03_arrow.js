const user ={
    username: "Anurag",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);

    }   
}
user.welcomeMessage() // Anurag , welcome to the website

user.username = "Sam"
user.welcomeMessage() // Sam , welcome to the website

const user2 = {
    username: "Ankit",
    price: 1999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this); // {username: 'Ankit', price: 1999, welcomeMessage: ƒ}
    }
    
//     console.log(this); // Why is this wrong?

// In an object literal, every entry must be a key: value pair (or shorthand like key or methodName(){}).
// But console.log(this) is just a statement, not a property.
// That’s why JavaScript throws a syntax error.
}

console.log(this); // Window {} 

function chai(){
    console.log(this); // Window {}
}

function chai2(){
    let username= "Anurag"
    console.log(this.username); // undefined
}

chai2() // undefined

const chai3 = () => {
    let username= "Anurag"
    console.log(this.username); // undefined
}

// Arrow function syntax const name = (parameters) => {statements}

const addTwo = (num1, num2) => {
    return num1 + num2

}
addTwo(2,4) // 6

// implicit return
const addTwo2 = (num1, num2) => num1 + num2
addTwo2(3,5) // 8

const addtwo3 = (num1,num2) => ( num1 + num2)
addtwo3(4,6) // 10
// if there is { } then we need to use return keyword

const addTwo4 = (num1, num2) => ({username: "Anurag"})
addTwo4(2,4) // {username: 'Anurag'}

const addTwo5 = (num1, num2) => {username: "Anurag"}
addTwo5(2,4) // undefined


