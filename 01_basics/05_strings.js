const name  = "Anurag"
const repoCount = 50

console.log(name + repoCount + "Value") // Anurag50Value
 
console.log(`Hello ${name} and my rep count is ${repoCount}`);
// Hello Anurag and my rep count is 50
const gameName = new String("valorant")

console.log(gameName[0]) // v
console.log(gameName.__proto__) // String constructor
console.log(gameName.length) // 8
console.log(gameName.toUpperCase()) // VALORANT
console.log(gameName) // String {'valorant'}

console.log(gameName.charAt(1)) // a
console.log(gameName.indexOf('a')) // 1
console.log(gameName.lastIndexOf('a')) // 3
console.log(gameName.slice(0,4)) // valo
console.log(gameName.split('a')) // [ 'v', 'lor', 'nt' ]
console.log(gameName.replace('valorant', 'cod')) // cod