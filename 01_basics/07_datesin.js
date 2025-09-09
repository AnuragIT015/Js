// Dates
let myDate = new Date();
console.log(myDate); // current date and time
console.log(myDate.toString()); // current date and time in string format

console.log(myDate.toDateString()); // current date in string format
console.log(myDate.toTimeString()) // current time in string format

console.log(myDate.toLocaleString()) // current date and time in local format

console.log(typeof myDate) // object

let myCreatedDate = new Date( 2023, 0, 23)

console.log(myCreatedDate.toString()) // Mon Jan 23 2023 ...

let myCreatedDate1 = new Date(2023, 0, 23, 5,3) // 2023 Jan 23 05:03:00

console.log(myCreatedDate1.toLocaleString()) // 1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("2023-01-23") // 2023 Jan 23 00:00:00

console.log(myCreatedDate2.toLocaleString()) // 1/23/2023, 12:00:00 AM
console.log(myCreatedDate2.toLocaleDateString()) // 1/23/2023

let myCreatedDate3 = new Date("01-14-2023") // 2023 Jan 14 00:00:00

console.log(myCreatedDate3.toLocaleString()) // 1/14/2023, 12:00:00 AM

let myTimeStamp  = Date.now();
console.log(myTimeStamp) // 1674457038703 (milliseconds from 1970 Jan 01 00:00:00 to now)

console.log(myCreatedDate3.getTime()) // 1672531200000 (milliseconds from 1970 Jan 01 00:00:00 to the date)

console.log(Math.floor(Date.now()/1000)) // 1674457038 (seconds from 1970 Jan 01 00:00:00 to now)

let newDate = new Date()

console.log(newDate.getDate()) // returns the day of the month (1-31)
// Similarly, you can use getDay(), getFullYear(), getHours(), getMinutes(), getSeconds(), getMilliseconds()

console.log(newDate.getMonth() +1) // returns the month (0-11) so we add 1 to get the correct month number

newDate.toLocaleString('default', {
    weekday: 'long', // 'short', 'narrow'
    timeZone: 'UTC'
    
})