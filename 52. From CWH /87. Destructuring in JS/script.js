// Destructuring 
// - >  DESTRUCTURING ASSIGNMENT IS USED TO UNPACK VALUES FROM AN ARRAY , OR PROPERTIES FROM OBJECTS , INTO DISTINCT VARIABLES . 

let arr = [3,5 ,8,12,14, 15,16]
// let [a , b, c , d , ...rest] = arr

// Traditionaly 
// let a = arr[0]
// let b = arr[1]

// console.log(a,b , c , d , rest); 

let [a, , b, ...rest] = arr
console.log(a, b , rest); 

// On Object 
let {x,y} = {x:1 , y:5}
console.log(x,y);

// Spread Operator 
let arr1 = [3,5,8]
let obj1 = {...arr1}
console.log(obj1);


function sum(v1, v2, v3){
    return v1 + v2 + v3 ;
}
let result = sum(...arr1)
console.log(result);  

let obj2 = {
    name : "Harry" ,
    company : "XYZ" ,
    address : "Xlz"
}

console.log({...obj2 , name: "Jhon" , address: "UK"}); 
console.log({name: "Jhon" , address: "UK" , ...obj2});  // This will print OBJ2 object without changing any value 