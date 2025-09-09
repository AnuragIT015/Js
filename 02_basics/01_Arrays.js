// array
const myArr = [0,1,2,3,4,5]

console.log(myArr) // [ 0, 1, 2, 3, 4, 5 ]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0]) // 1

// array methods
myArr.push(6)
console.log(myArr) // [ 0, 1, 2, 3, 4, 5, 6 ]

myArr.pop()
console.log(myArr) // [ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(-1)
console.log(myArr) // [ -1, 0, 1, 2, 3, 4, 5 ]

myArr.shift() // remove first element
console.log(myArr) // [ 0, 1, 2, 3, 4, 5 ]

console.log(myArr.includes(3)) // true

console.log(myArr.indexOf(3)) // 3

const newArr = myArr.join()
console.log(newArr) // 0,1,2,3,4,5

console.log(typeof newArr) // string

// slice, splice
console.log("A",myArr) // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,4) // does not modify original array

console.log(myn1) // [ 1, 2, 3 ]

console.log("B",myArr) // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3) // modifies original array
console.log("C",myArr) // C [ 0, 4, 5 ]
console.log(myn2) // [ 1, 2, 3 ]

console.log(myArr) // [ 0, 4, 5 ]
