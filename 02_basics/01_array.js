const myArray = [0, 1, 2, 3, 4, 5]

const myHeros = ["Shaktiman" , "naagraj"]

const myArr2 = new Array(1, 2, 3 , 4 )

console.log(myArray[0]);
console.log(myArray);
console.log(myArr2);


// Array methods

myArray.push(6)
myArray.push(7)
myArray.pop()
console.log(myArray);

myArray.unshift(9)  // [ 9, 0, 1, 2, 3, 4, 5, 6 ]
console.log(myArray) 

myArray.shift()
console.log(myArray);  // [ 0, 1, 2, 3, 4, 5, 6 ]

console.log(myArray.includes(9)); // False

console.log(myArray.indexOf(19));   // -1

const newArr = myArray.join()
console.log(newArr);
console.log(typeof newArr);


// Slice , Splice

console.log("A " , myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B " , myArray);

const myn2 = myArray.splice(1,3) 
console.log(myn2);
console.log("c " , myArray);  

/* 
Note : 
slice() extracts elements into a new array without modifying the original. 
splice() changes the contents of the original array.
*/