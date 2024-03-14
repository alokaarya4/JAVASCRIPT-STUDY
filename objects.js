//                              OBJECTS

/*   

*/


// OBJECTS LITERALS

const mySym = Symbol()
const MyUser = {
    name: "Alok Kumar",
    age: 25,
    [mySym]: "akash",
    location: "Gorakhpur",
    email: "alok@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(MyUser.email);
console.log(MyUser["email"]);
console.log(MyUser["isLoggedIn"]);
console.log(MyUser[mySym]);

console.log(MyUser.email = "alokaarya@gmail.com");  // Overright (change the value)
// Object.freeze(MyUser) // Using it does not change the value

console.log(MyUser.email = "alokkumarbharti@gmail.com"); 
console.log(MyUser);

MyUser.greeting = function(){
    console.log("Hello");
}
MyUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(MyUser.greeting());
console.log(MyUser.greetingTwo());
// console.log(MyUser.greeting());
