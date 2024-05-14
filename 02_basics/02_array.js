const marvel_heros = ["thor" , "Ironman" , "Spiderman"]
const dc_heros = ["Superman" , "Flash" , "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  // [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ] Array Inside Array
// console.log(marvel_heros[3][1]);  // Flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);    // [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros);


const anotherArray = [1,2,3, [4,5,6] , 7, [6,7 , [4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.isArray("Sipun"));
console.log(Array.from("Sipun"));
console.log(Array.from({name: "Sipun"}));  // Intresting Interview question 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));