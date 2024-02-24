/*                      CONVERSION


           1234Alok -> NaN  (Not a Number)
           true -> 1
           false -> 0
           "123" -> 123 (string to number)
           "123" + 1 -> "1231" (string to number)
           "" -> 0 (false)
           "1" -> 1 (true)

*/

let score = "400"
console.log(typeof score)         // string

let scoreNumber = Number(score)   // change string to number 
console.log(typeof scoreNumber)   






/*                                 OPERATIONS

        
        Operators :- Operators are used to performing specific mathematical and logical computations on operands.


*/


let a = 44
let negvalue = -a
console.log(negvalue)   // -44

console.log(4 + 4)      // 8
console.log(4 - 4)      // 0
console.log(4 * 4)      // 16
console.log(4 / 4)      // 1
console.log(4 % 4)      // 0
console.log(4 ** 4)     // 256



let str1 = "Alok"
let str2 = " Kumar"

let str3 = str1 + str2
console.log(str3)   // Alok Kumar


console.log("4" + 4);  // 44
console.log(4 + "4");  // 44
console.log("4" + 4 + 4);    // 444
console.log(4 + 4 + "4");    // 84



