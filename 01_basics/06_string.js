const name = "Sipun"
const repoCount = 50 

console.log(name + repoCount + "Value");  // Sipun50Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   // Hello my name is Sipun and my repo count is 50


const gameName = new String('Sipun-Sn')  
console.log(gameName[0]);                // S
console.log(gameName.__proto__);        // {}


console.log(gameName.length);          // 8
console.log(gameName.toUpperCase());   // SIPUN-SN
console.log(gameName.charAt(4));      // n
console.log(gameName.indexOf('u'));   // 3

const newString = gameName.substring(0,4)
console.log(newString);   // Sipu

const anotherString = gameName.slice(-7,4)
console.log(anotherString);  // ipu


const newString1 = "      Sipun       " ;
console.log(newString1);           //      Sipun       
console.log(newString1.trim());   // Sipun


const url = "https://sipunkumar.com/sipun%20nanda" ;

console.log(url.replace('%20' , '-'));    //  https://sipunkumar.com/sipun-nanda

console.log(url.includes('sipun'));      // true


const newMail = "Sipun-Kumar-Nanda"   
console.log(newMail.split('-'));     // [ 'Sipun', 'Kumar', 'Nanda' ]
