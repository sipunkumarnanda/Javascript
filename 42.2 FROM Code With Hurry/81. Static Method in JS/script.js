class Animal {
    constructor(name){
     // this.name = name
     this.name = Animal.capitalized(name)
     
     console.log(name);
     console.log(this.name);
    }
 
    walk(){
     // console.log("Animal " + Animal.capitalized(this.name) + " is walking");
     console.log(`Animal ${this.name} is walking`);
    }
 
    static capitalized(name){
     return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
 }
 
 let j = new Animal("jack")
 j.walk()