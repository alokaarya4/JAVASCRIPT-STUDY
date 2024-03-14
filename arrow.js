//                           ARROW FUNCTIONS

/*
  
    Arrow Functions :- An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage: Arrow functions don't have their own bindings to this , arguments , or super , and should not be used as methods.

    This :- Current Context

*/


const user = {
    name: 'Alok Kumar',
    age: 25,
    sayHello: function () {
        console.log(`Hello, My name is ${this.name}`);
    }
}
user.sayHello();


function chai () {
    let username = "Alok kumar"
    console.log(this.username);
}
chai()


const myChai = () => {
    let username = "Alok kumar"
    console.log(this.username);
}
myChai()


const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2, 2))


const addThree = (num1, num2, num3) => num1 + num2 + num3   // emplishid return
console.log(addThree(4, 4, 4))