let a = 10
const b = 20
var c = 30

function test(){
    let a = 40
    const b = 50
    var c = 60
    console.log(a) // 40 
    console.log(b) // 50
    console.log(c) // 60
}

console.log(a) // 10
console.log(b) // 20
console.log(c) // 30

function one(){
    const username = "Anurag"
    function two(){
        const website = "youtube"
        console.log(username) // Anurag
    }
    console.log(website) // Reference Error
    two() // print username
    
}
one()

if(true){
    const username = "Anurag"
    if(username === "Anurag"){
        const website = "youtube"
        console.log(username+website)
    }
    console.log(website) // Reference Error

}
console.log(username) // Reference Error

console.log(addone(5)) // 6 accessible
function addone(num){ //function
    return num +1
}

addone(5) //6

addtwo(5) // Reference Error not accessible
const addtwo = function(num){ // function expresssion
    return num + 2
}
addtwo(5) //7