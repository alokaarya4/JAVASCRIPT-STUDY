//                        NUMBER

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const myNumber = 44.1234
console.log(myNumber.toPrecision(5));

const myNumber2 = 40000000
console.log(myNumber2.toLocaleString('en-IN'));





//                       MATH

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.ceil(4.7));
console.log(Math.floor(4.7));
console.log(Math.sqrt(24));

console.log(Math.random());   // this is give the value to 0 to 1
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20  

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


