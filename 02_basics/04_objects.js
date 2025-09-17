// const tinderUser = new Object();

const tinderUser = {}
tinderUser.id = "123abc"
tinderUsername = "Anurag"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc' , isLoggedIn: false }

const regularUser= {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Anurag",
            lastName: "Gupta"
        }
    }
}
console.log(regularUser.fullname.userFullname.firstName) // Anurag

console.log(regularUser.fullname?.userFullname.firstName) // Anurag

const obj1 = {1: "a" , 2: "b"} // key is number

const obj2= {3 : "a" , 4: "b"} // key is number 


// const obj4 = Object.assign({}, obj1, obj2) // merging two objects
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//const obj3 = {...obj1, ...obj2} // merging two objects
//console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {

    }

]
console.log(users[1].email) //  b@mail.com

console.log(tinderUser);
console.log(Object.keys(tinderUser)) // [ 'id', 'isLoggedIn', 'tinderUsername' ]
console.log(Object.values(tinderUser)) // [ '123abc', false, 'Anurag' ]
console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'isLoggedIn', false ], [ 'tinderUsername', 'Anurag' ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // true

const course = {
    couresname: "js in hindi",
    price: "999",
    courseInstructor: "Anurag"

}

const {courseInstructor} = course

console.log(courseInstructor) // Anurag

// const {courseInstructor: instructor} = course
// console.log(instructor) // Anurag

const navbar = ({company}) =>{

}

navbar(company = "Anurag") // passing object as argument(restructuring object)
 





