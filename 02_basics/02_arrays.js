const marvel_heroes = ["thor","Ironman", "spiderman"]
const dc_heroes = ["superman","flash", "batman"]

marvel_heroes.push(dc_heroes) // adds the entire array as the last element

console.log(marvel_heroes) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heroes[3][1]) // flash

marvel_heroes.pop() // removes the last element
console.log(marvel_heroes.concat(dc_heroes)) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// concat does not modify the original array but returns a new array

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread operator

console.log(all_new_heroes) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_arr = [1,2,3,[4,5,6], 7 , [6,7,[4,5]]]

const real_another_arr = another_arr.flat(Infinity) // flattens the array completely but user should specify exact depth instead of Infinity for better performance


console.log(real_another_arr) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Anurag")) // false
console.log(Array.isArray([1,2,3])) // true

console.log(Array.from("Anurag")) // [ 'A', 'n', 'u', 'r', 'a', 'g' ]

// from creates an array from an iterable object
console.log(Array.from({name:"Anurag"})) // [] interesting

let score1= 100
let score2 = 200
let score3= 300

console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]