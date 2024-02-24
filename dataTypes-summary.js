/*                          DATA TYPES SUMMARY 


    -> There are two types of data types in JavaScript

                1. Primitive (7) Data Types
                   - String
                   - Number
                   - Boolean
                   - Undefined
                   - Null
                   - Symbol
                   - BigInt

                2. Non-Primitive (Object) Data Types
                   - Objects
                   - Array
                   - Functions
    
    -> JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


    


*/


const score = 400   // number
const scoreValue = 400.4  // number

const isLoggedIn = true // true
const outsidetemp = null // null (empty)
let name;  // undefined (not assigned)


const id = Symbol('1234')  
const anotherId = Symbol('1234')
console.log(id === anotherId)  // false  (these are not same)

const bigNumber = 1234567899876576578878784321n  // BigInt (n is used to define big number)



//                     NON-PRIMITIVE DATA TYPES

// Array

const person = ["Alok Kumar", "Ashish Kumar Gautam", "Khurshid Ahmad", "Avinash Kumar"]
console.log(person[0])  // Alok Kumar


// Functions

   const myFunction = function(){
       console.log("This is my function")
   }

   console.log(typeof myFunction)  // function

// Objects

let personDetails ={
    name: "Alok Kumar",
    age: 25 
}