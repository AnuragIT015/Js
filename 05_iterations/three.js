const arr = [1,2,3,4,5];

for(const num of arr){
    console.log(num)
} // prints all the elements of the array

let greetings = "Hello World";
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
} // prints each character of the string

// Maps
const map = new Map();
map.set('state', 'Maharastra');
map.set('city', 'Pune');
map.set('country', 'India');

console.log(map);
//Map(3) {'state' => 'Maharastra', 'city' => 'Pune', 'country' => 'India'}

for(const key of map){
    console.log(key)
}
//['state', 'Maharastra']
//['city', 'Pune']
//['country', 'India']

for(const [key, value] of map){
    console.log(`key is ${key} and value is ${value}`);
}
//key is state and value is Maharastra
//key is city and value is Pune
//key is country and value is India

const myObject ={
    'game1' : `NFS`,
    'game2' : `FIFA`,
    'game3' : `MORTAL KOMBAT`
}
for(const [key, value] of myObject){
    console.log(key,':-', value);
}
// TypeError: myObject is not iterable


