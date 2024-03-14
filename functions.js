//                               FUNCTIONS

/*
   Functions :- A JavaScript function is a block of code designed to perform a particular task.
   
   Parameters :- Function parameters are the names listed in the function definition.
   Arguments :- Function arguments are the real values passed to (and received by) the function.


*/


// function addTwoNum (param1, param2) {
//     console.log(param1 + param2); // return :- undifined
// }


function addTwoNum (num1, num2) {
   let result = num1 + num2
   return result
}

const result = addTwoNum (5, 6)
console.log("result :-", result); // return :- result :- 11


function userLoggedIn (username) {
    return `${username} is logged in`
}
console.log(userLoggedIn("Alok Kumar")) // return :- Alok Kumar is logged in
console.log(userLoggedIn()) // undefined


function userLoggedIn (username) {
    if (username === undefined) {
        console.log("Please Enter a username");
        return 
    }
    return `${username} is logged in`
}
console.log(userLoggedIn()) // undefined



function calculateCartPrice(...price1){            // (...) this is rest oprator   
    return price1
}
console.log(calculateCartPrice(200, 400, 800, 1000))


// Run from object to function
const user = {
    username: "Alok Kumar",
    Address: "Gorakhpur"
}

function myObject(meuser){
    console.log(`My Username is ${meuser.username} & my Address is ${meuser.Address}`);
}
myObject(user)

// Run from Array to function
const userArray = [200, 300, 400, 500]

function myArray(getArray){
        return getArray[0]
}
console.log(myArray(userArray)) // return :- 200