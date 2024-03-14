/*                             ARRAY
         
          -> Array :- The Array is a Object. Strings a collection of multiple items under a single variable name.                
*/

const myArr = ["Alok Kumar", "Ashish Kumar Gautam", "Khurshid Ahmad", "Avinash Kumar"]
const myArr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(myArr2[4])  // this is indexing it is started always in 0 

// // Array Methods

myArr.push("Aman Kumar")   // Adding a new value
console.log(myArr);

myArr.pop()  // last value remove in array
console.log(myArr);

myArr.unshift("Akash Kumar")  // Adding a value in first line 
console.log(myArr)

myArr.shift()   // Remove the value to first line
console.log(myArr);

// Qustion properties for array

console.log(myArr.includes("Mukesh Kumar"));  // false
console.log(myArr.includes("Alok Kumar"));  // True 
console.log(myArr2.includes(10));  // false
console.log(myArr2.includes(4));  // True

// convert num to string

const newArr = myArr2.join()
console.log(myArr2);
console.log(newArr);  

// Slice, Splice

console.log("A", myArr2);
const myn1 = myArr2.slice(1, 4)
console.log(myn1);   


console.log("B", myArr2);
const myn2 = myArr2.splice(1, 4)

console.log("C", myArr2);
console.log(myn2);




const marval_heros = ["Ironman", "Thor", "The hulk", "Dr Strange"]
const dc_heros = ["Aquaman", "Superman", "Batman", "Flash"]

marval_heros.push(dc_heros)
console.log(marval_heros); // this is not good because all array merge 
console.log(marval_heros[2][2]); // indexing   

const allHeros = marval_heros.concat(dc_heros)
console.log(allHeros);  // all value in single array

const all_new_heros = [...marval_heros, ...dc_heros] // spraid Operator
console.log(all_new_heros);

const nestedArr = [1, 2, 3, [4, 5, 6,], 7, [8, 6 [1, 4]]]
const spraidArr = nestedArr.flat(Infinity)
console.log(spraidArr);




// Convert String to Array
console.log(Array.isArray("Alok")) // false
console.log(Array.from("Alok")) // ['A', 'l', 'o', 'k']
console.log(Array.from({name: "Alok"})) // [] empty     {} --> object

let Score1 = 100
let Score2 = 200
let Score3 = 300
let Score4 = 400

console.log(Array.of(Score1, Score2, Score3, Score4));


