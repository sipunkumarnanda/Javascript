class Animal {
    constructor(name , color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " is running");
    }
    shout(){
        console.log(this.name + " is shouting");
    }
}

// Inheritance 

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + " is eating banana");
    }
    hide(){
        console.log(`${this.name} is hiding`);
    }
}

let ani = new Animal("Bruno" , "White")
let m = new Monkey("Chimpu" , "Orange")

ani.shout()
m.eatBanana()
m.shout()  
m.hide()

// ani.hide() // This will Throw an error 
