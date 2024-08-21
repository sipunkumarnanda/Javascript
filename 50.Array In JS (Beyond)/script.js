const myArray = []
//  %DebugPrint(myArray)

 // continious , Holey 

 // SMI (small integer)
// packed element
// Double (float , string , function)  

// PACKED_SMI_ELEMENTS
const arrTwo = [1,2,3,4,5] 

arrTwo.push(6.0)
console.log(arrTwo); // Now its became PACKED_DOUBLE_ELEMENTS
console.log(arrTwo.length);

arrTwo.push("7") 
console.log(arrTwo); //Now its became PACKED_ELEMENTS
console.log(arrTwo.length);


arrTwo[10] = 11
console.log(arrTwo);
 // HOLEY_ELEMENTS  
console.log(arrTwo.length);

console.log(arrTwo[9]); 
console.log(arrTwo[19]); 

// bound check 
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype , 10)
// hasOwnproperty(Object.prototype , 10) 

// holes are very expensive in js 

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

// SMI > Double > Packed 
// H_SMI > H_DOUBLE > H_PACKED 

const arrFour = new Array(3)
// just 3 holes - Holey_SMI_ELEMENTS 
console.log(arrFour);
arrFour[0] = "1"  // Holey_ELEMENTS
console.log(arrFour);
arrFour[1]= "2"
arrFour[2] = "3"
console.log(arrFour);

const arrFive = []
console.log(arrFive);
arrFive.push('1')  // PACKED_ELEMENTS
arrFive.push('2')  // PACKED_ELEMENTS
arrFive.push('3')   // PACKED_ELEMENTS
console.log(arrFive);   

const arrSix = [1,2,3,4,5]
arrSix.push(NaN)
console.log(arrSix);  // PACKED_DOUBLE
arrSix.push(Infinity)
console.log(arrSix);  // PACKED_DOUBLE 



