//                        SCOPE

/* What is scope? :- Scope determines the accessibility (visibility) of variables.
                        JavaScript variables have 3 types of scope:

                              1.  Block scope
                              2.  Function scope
                              3.  Global scope

1.  Block scope :- Variables declared with the let and const keyword are block-scoped
2.  Function scope :- Variables declared with the var keyword are function-scoped.
3.  Global scope :- A variable declared outside a function becomes GLOBAL.
*/

// Block scope {}
// function scope function(){}
// Global scope var a = 10


// Example 1
let a = 400      // Global scope
console.log(a)

if (true) {      // Block scope
    let a = 100
    console.log(a)
}

// Nested Function Use
function one() {                // Function scope
        const username = "Alok Kumar"

        function two() {      
           const website = "a3__creation"
           console.log(username);
        }
    // console.log(website);   

    two()
}    

one()

// Hoisting :- Hoisting is JavaScript's default behavior of moving declarations to the top.

console.log(addone(5))  // 6
function addone(num){
    return num + 1
}

console.log(addtwo(5))      // Error : Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2
}