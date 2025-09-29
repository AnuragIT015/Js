// Immediately Invoked Function Expressions (IIFE)
// A function that runs as soon as it is defined.

(function(){
    console.log("IIFE Ran..");  
})(); // IIFE Ran..
//; is optional but good practice to avoid issues when concatenating scripts

// Why use IIFE?
// 1. Avoid polluting the global scope
// 2. Data privacy / Encapsulation
// 3. Module pattern (more on this later) 

//syntax
// (function(){
//     // All code here is private
// })();

( () => {
    console.log("IIFE with Arrows")
})(); // IIFE with Arrows

((username) => {
    console.log(`${username}`);
    
})('Anurag'); // Anurag)