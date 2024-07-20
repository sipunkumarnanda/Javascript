console.log("----------------------------------------------------");

let myName = "Sipun      " 
let myChannel = "Chai                  "

console.log(myName.trim().length);



// console.log(myName.truelength());    


let myHeros = ["thor" , "Spiderman"]


let heroPopwer ={
    thor : "hammer" ,
    spiderman : "sling" ,

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    } 
} 

////////////////////////////////////////

// heroPopwer.hitesh() // Giver Error : TypeError: heroPopwer.hitesh is not a function 

Object.prototype.sipun = function(){
    console.log(`sipun is present in all Objects`);
}

Array.prototype.heyySipun = function(){
    console.log(`Sipun Says Hello `);
}

heroPopwer.getSpiderPower()

heroPopwer.sipun()  
myHeros.sipun()

// heroPopwer.heyySipun()
myHeros.heyySipun() 

// Inheritance 

const User = {
    name : "chai" ,
    email : "chai@google.com"
}
const Teacher = {
    makeVideo : true 
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS assignment" ,
    fullTime : true ,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User 

// modern syntax 

Object.setPrototypeOf(TeachingSupport , Teacher) 


// 

let anotherUserName = "ChaiAurCode                            "

String.prototype.trueLength = function(){
    console.log(`${this}`);

    console.log(`True length is ${this.trim().length}`);
}

console.log(anotherUserName.trueLength());

"Sipun".trueLength()
"iceTea".trueLength()