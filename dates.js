//                             DATES

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  // Object

// let myCreateDate = new Date(1999, 3, 6);    // Date
// let myCreateDate = new Date(1999, 3, 6, 9, 4);  // Date & Time
let myCreateDate = new Date("03-06-1999");  // Date
console.log(myCreateDate.toLocaleString());  // Date with Time Use toLocaleString()

let myTimeStamp = Date.now();
console.log(myTimeStamp);  // Time Stamp
console.log(myCreateDate.getTime()); 
console.log(Math.floor(Date.now()/1000)); 


let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', { 
    weekday: 'long', 
});

