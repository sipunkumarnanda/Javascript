// import { multiply } from "./utility.js";

// const result = multiply(2,3,4)
// console.log(result);

// // Rename 
// import { multiply as mul } from "./utility.js";

// const result2 = mul(8,9,9)
// console.log(result2);

///////////////////////////////////////////
import { mul , add} from "./utility.js";

const addResult = add(10,20,30)
console.log(addResult);

/////////////////////////
import * as utility from "./utility.js"

const result3 = utility.mul(7,10,10)
console.log(result3);

///////////////////////////////////////////////
console.log(utility.student_Count);

/////////////////////////

import squar from "./utility.js";
console.log(squar(10));