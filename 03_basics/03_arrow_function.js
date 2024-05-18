
const user = {
    userName : "Sipun" ,
    price : 999 , 

    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to website`);
        console.log(this);                      // Here this talk about current context{ userName: 'Sipun', price: 999,...........}
    }

}

// user.welcomeMessage()

// user.userName = "Sam"
// user.welcomeMessage()

// console.log(this);

// In browser Global Object is Window Object 

// function chai(){
//     let userName = "Sipun KUmar Nanda"
//     console.log(this.userName);   // this only work inside Object 
// }

// chai()


const chai = () => {
    let userName = " Sipun kUmar Nanda "
    console.log(this);
}

chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,5));



// Implicit return arrow function 
// Way-1
const addTwo = (num1 , num2) => num1 + num2

console.log(addTwo(5,5));


// way-2
const addTwo2 = (num1 , num2) => (num1 + num2)
console.log(addTwo2(5,5));

// way-3  if an Object is present inside Implicit arrow function 
const addTwo3 = (num1 , num2) => ({userName : "Sipun"})
console.log(addTwo3());

const myArray = [2 , 5 , 7 ,5 , 8 , 10]

myArray.forEach(()=>({}))