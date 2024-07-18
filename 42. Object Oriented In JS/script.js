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

// Constructor Function 
const promise1 = new Promise((resolve, reject) => {
    
})

const date = new Date()

function User(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn 

    this.greeting = function(){
        console.log(` Welcome ${this.username}`);
    }

    // return this  bydefault return 
}
const userOne = new User("Sipun" , 12 , true)
const userTwo = new User("Chai Aur Code" , 11 , false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);

console.log(new User);