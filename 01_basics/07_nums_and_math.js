const score = 400 
console.log(score);    // 400

const blanace = new Number(100.673427)
console.log(blanace);     // [Number: 100.673427]

console.log(blanace.toString().length);    // 10
console.log(blanace.toFixed(2));           // 100.67

const otherNumber = 123.8966 
console.log(otherNumber.toPrecision(3));    // 124

const hunreds = 1000000 
console.log(hunreds.toLocaleString('en-IN'));   // 10,00,000

//  ******** Maths ********
console.log("******** Maths ********");
console.log(Math);

console.log(Math.abs(-4));     // 4
console.log(Math.round(4.6));  // 5

console.log(Math.ceil(4.2));   // 5
console.log(Math.floor(4.9));  // 4

console.log(Math.min(4,3,6,8));  // 3
console.log(Math.max(4,3,6,8));  // 8

console.log(Math.floor(Math.random()*10) + 1 );   // Random Number

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // Formula for  generate a random number between minimun and maximun a number 
// Random Number