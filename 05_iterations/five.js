const coding = ["js", "ruby", "python", "java"]

coding.forEach(function (val) {
    console.log(val);
}) // prints each element of the array

coding.forEach( (item)=> {
    console.log(item);
})

function printMe(val){
    console.log(val);
}

coding.forEach(printMe) // prints each element of the array

coding.forEach( (item,index,arr)=>{
    console.log(`item is ${item}, index is ${index} and array is ${arr}`);
}) //item is js, index is 0 and array is js,ruby,python,java
//item is ruby, index is 1 and array is js,ruby,python,java
//item is python, index is 2 and array is js,ruby,python,java
//item is java, index is 3 and array is js,ruby,python,

const myCoding = [
    {
        name: 'javascript',
        filename: 'js'
    },
    {
        name: 'ruby',
        filename: 'rb'
    },
    {
        name: 'python',
        filename: 'py'
    }
    
]

myCoding.forEach( (item)=> {
    console.log(item.name);
})
// javascript
// ruby
// python

// for Each does not return anything
const ret = myCoding.forEach( (item)=> {
    return item.name
})
console.log(ret); // undefined

const myNums = [1,2,3,4,,5,6,7,8,9,10]

const newNums =myNums.filter( (num)=> num>4) // filter returns a new array
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const newNums2 = myNums.filter( (num)=> {
    return num%2===0
}) // when using { } you need to use return

