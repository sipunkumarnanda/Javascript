const name = "Sipun"
const repoCount = 50 

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String('Sipun-Sn')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);


const newString1 = "      Sipun       " ;
console.log(newString1);
console.log(newString1.trim());


const url = "https://sipunkumar.com/sipun%20nanda" ;

console.log(url.replace('%20' , '-'));

console.log(url.includes('sipun'));


const newMail = "Sipun-Kumar-Nanda" 
console.log(newMail.split('-'));
