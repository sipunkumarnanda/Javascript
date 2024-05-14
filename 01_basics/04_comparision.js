// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);

console.log("2" > 1);
console.log("2" > 3);

console.log(null > 0);    // False
console.log(null < 0);    // False

console.log(null >= 0);  // true
console.log(null <= 0);  // true

console.log(null == 0);   // False

/* 
NOTE :-
The reason is that an equality check == and < > <= >= work differently .
Comparision Converts null to a Number , Treating it as 0 .
That's why (3) null >= 0 is true and (1) null > 0 is false .
*/

console.log("*************** In Undefined Cases ***************");

console.log(undefined == 0)  // False
console.log(undefined > 0)   // False
console.log(undefined < 0)   // False
console.log(undefined >= 0)  // False
console.log(undefined <= 0)  // False


console.log("******** Strict Check (===) ********");

console.log("2" == 2);   // True
console.log("2" === 2);  // False   => Check Value and also Datatype .
