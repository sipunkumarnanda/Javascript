// Map   Retuen new Value 
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

 const newNums = myNumbers.map((num)=>{
    return num + 10 
})   // Map   Retuen new Value 
// console.log(newNums);



// Using For Each 
console.log("Using forEach loop");
const newNums2 = []

myNumbers.forEach((num)=>{
    let newNumber = num + 10 
    newNums2.push(newNumber)
})
console.log(newNums2);

// Chaining 

const newNumbers = myNumbers.map((num)=>{
    return num * 10 
}).map((num)=>{
    return num + 1 
}).filter((num)=>{
    return num >= 40 
})

console.log(newNumbers);