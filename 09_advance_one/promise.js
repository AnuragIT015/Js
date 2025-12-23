const promiseOne = new Promise((resolve, reject) => {
    // Do some asynchronous task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve();
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username: "john_doe", email: "johndoe@gmail.com"});
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){


        let error = true;
        if(!error)
            resolve({username: "jane_doe", password: "12345"});
        else
            reject("Error: Something went wrong");
    }, 1000);
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username;
})

console.log(username); // Promise { <pending> }