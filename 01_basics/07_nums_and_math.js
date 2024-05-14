const score = 400 
console.log(score);

const blanace = new Number(100.673427)
console.log(blanace);

console.log(blanace.toString().length);
console.log(blanace.toFixed(2));

const otherNumber = 123.8966 
console.log(otherNumber.toPrecision(3));

const hunreds = 1000000 
console.log(hunreds.toLocaleString('en-IN'));

//  ******** Maths ********
console.log("******** Maths ********");
console.log(Math);

console.log(Math.abs(-4));     // 4
console.log(Math.round(4.6));  // 5

console.log(Math.ceil(4.2));   // 5
console.log(Math.floor(4.9));  // 4

console.log(Math.min(4,3,6,8));  // 3
console.log(Math.max(4,3,6,8));  // 8

console.log(Math.floor(Math.random()*10) + 1 ); 

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // Formula for generate a random number between minimun and maximun a number 
