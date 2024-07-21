// Object Literal 
const user = {
    username : "Sipun" ,
    LoginCount : 8 ,
    signedIn : true , 

    getUserDetails: function(){
        console.log("Got User Details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails()); 
// console.log(this);     


console.log("------------------------------------------")

const promise1 = new Promise((resolve, reject) => {
    
})

const date = new Date()

// Constructor Function  
function User(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn 

    this.greeting = function(){
        console.log(` Welcome ${this.username}`);
    }

    // return this  // Bydefault Return 
}

/////////////////////////////////////////////////////////////////////// 

const user1 = User("Sipun" , 12 , true)
const user2 = User("Chai Aur Code" , 11 , false)

console.log(user1);  // Here user2 Over rides User1 Values , So output will be - >  Chai Aur Code" , 11 , false 




const userOne = new User("Sipun" , 12 , true)
const userTwo = new User("Chai Aur Code" , 11 , false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);

console.log(userTwo.greeting());

console.log(new User);   
console.log(new User("Alexa"));   

console.log(userTwo instanceof User);

console.log(user1 instanceof User);