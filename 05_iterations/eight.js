//Reduce
const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currival){
    console.log(`acc: ${acc} and currival: ${currival}`)
    return acc + currival
},0)

console.log(myTotal); // 6
// same with arrow function
const myTotal1 = myNums.reduce( (acc, curr) => acc+curr,0)

console.log(myTotal1);
//6

const shoppingCart = [
    {item: "js course", price:2999
    },
    {
        item: "py course" ,price: 1999
    },
    {
        item: "mobile dev" , price: 5999
    },
    {
        item: "Data science" , price: 12999
    }
]

const totalPrice = shoppingCart.reduce( (acc,item) => acc+item.price,0)

console.log(totalPrice); // 23996
