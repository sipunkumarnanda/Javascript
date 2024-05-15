// Singleton 

// Object literals

// Object.create

const mySym = Symbol("key1")

const jsUser = {
    name : "Sipun" ,
    "full Name" : "Sipun Kumar Nanda" ,
    age : 23 ,
    location : "BBSR" ,
    email : "sipun@google.com" ,
    isLoggedIn : false ,
    lastLoginDays : ["monday" , "saturday"] ,
    [mySym] : "myKey1"    // Use Symbol Datatype 
}
console.log(jsUser.name);

// console.log(jsUser.full Name);   It will Give error


console.log(jsUser["full Name"]);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);            // myKey1
console.log(typeof jsUser[mySym]);    // string

jsUser.email = "sipunkumar@chatgpt.com"
console.log(jsUser["email"]);

// Locked An Object Or FREEZE an object 

// Object.freeze(jsUser)
jsUser.email = "alia@x.com"
console.log(jsUser.email);

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user")      // Hello Js user
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user  2 , ${this.name}`)   // Hello Js user  2 , Sipun
}


console.log(jsUser)
console.log(jsUser.greeting)
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())