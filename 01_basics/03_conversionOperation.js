let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber =Number(score) ;

console.log(typeof valueInNumber);

let mark = "65ha" ;
let markInNumber = Number(mark);
console.log(typeof markInNumber);
console.log(markInNumber);
console.log(typeof NaN);  // Typeof NaN Is Number



   /*  In null Cases   */

let mark2 = null
console.log(mark2);             // null
console.log(typeof mark2);     // Object
let mark2InNumber = Number(mark2)
console.log(typeof mark2InNumber);           // number
console.log(mark2InNumber);                  // 0



  /*  In Undefined Cases   */

let score2 = undefined
console.log(score2);                       // undefined
console.log(typeof score2);                // undefined

let score2InNumber = Number(score2)
console.log(score2InNumber);            // NaN
console.log(typeof score2InNumber);     // Number


/*  In boolean Cases   */
let bool = true
console.log(typeof bool);         // boolean

let boolInNumber = Number(bool)    
console.log(boolInNumber);            // 1
console.log(typeof boolInNumber);    // number


// "33" => 33
// "33abc" => NaN
// true => 1 false => 0 

/*  In boolean Cases   */

let isLoggedIn = 1

let isLoggedInInBoolean = Boolean(isLoggedIn)

console.log(isLoggedInInBoolean);   // true
console.log(typeof isLoggedInInBoolean);  // Boolean

/*  In String To boolean Cases   */

let isLoggedIn2 ="Sipun";    // If its empty ("") => false , if "Sipun" / anything inside "" => true

let isLoggedIn2InBoolean = Boolean(isLoggedIn2)
console.log(isLoggedIn2InBoolean);
console.log(typeof isLoggedIn2InBoolean);   


let someNumber = 33 
let stringNumber = String(someNumber) 
console.log(stringNumber);
console.log(typeof stringNumber);

/* ****************** Operations ******************* */
console.log("****************** Operations *******************");

let value = 3 
let negValue = -value 
console.log(negValue);
console.log(typeof negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);


let str1 = "Hello"
let str2 = " Sipun"
console.log(str1 + str2) ;

console.log(1 + "2");

console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32