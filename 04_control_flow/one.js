// if
const isUserloggedIn  = true;
if (isUserloggedIn) {
    console.log('User is logged in');
} // User is logged in

// <,>,<=,>=,==,===(strict),!=,!==

if(2==='2'){
    console.log('excuted');
} // not excuted

if(2!=='2'){
    console.log('excuted');
} // excuted

// if...else
const isUserloggedIn1  = false;
if (isUserloggedIn1) {
    console.log('User is logged in');
} else {
    console.log('User is not logged in');
} // User is not logged in

// if...else if...else
const userRole = 'admin'; // admin, sub-admin, user
if (userRole === 'admin') {
    console.log('You get full access');
} else if (userRole === 'sub-admin') {
    console.log('You get access to create/delete courses');
} else if (userRole === 'user') {
    console.log('You get access to consume content');
} else {
    console.log('Trial user. Please sign up to get more access');
} // You get full access

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard && 2==2){
    console.log('you can buy car');
} // you can buy car


if(userLoggedIn || debitCard){
    console.log('you can but a car');
}
// you can but a car

// Switch case
const month = 3
switch(month){
    case 1:
        console.log('Januray');
        break;
    case 2:
        console.log('Feburaury');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    default:
        console.log('default case matched');
        break;
        
} // March



