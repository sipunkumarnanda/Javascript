// Math PI 

const myNewObject = {
    username: "Sipun"
}

console.log(myNewObject);


console.log(Math.PI);
Math.PI = 5 
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math , "PI") 
console.log(descriptor); 

const obj = Object.create(null)

const chai = {
    name : "ginger chai" ,
    price : 250 , 
    isAvailable : true ,

        orderChai : function(){
            console.log("Chai nahi bani");
        }
}
console.log(chai); 

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai , 'name' , {
    writable: false ,
    enumerable : true ,
    //  enumerable: false ,
    configurable: false 
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

for (let [key , value] of Object.entries(chai)) {
   if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
   }
}