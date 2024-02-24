/*                        STRINGS 

*/


const name = "Alok"
const myAge = 25

// console.log(name + myAge)  // Alok25    (This is Outdated)

console.log(`My name is ${name} and my age is ${myAge}`)  // My name is Alok and my age is 25 (stringinterpolation This is Modern way of doing it)

const gameName = new String ('Alok-Aarya')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('K'));


const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   Alok    "
console.log(newStringOne.trim());

const url = "https://www.google.com"
console.log(url.replace('https', 'http'));
console.log(url.includes('https')); // true
console.log(url.includes('http')); // false

console.log(gameName.split('-'));