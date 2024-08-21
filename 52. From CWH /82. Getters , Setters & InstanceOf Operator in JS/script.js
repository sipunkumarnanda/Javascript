class Animal {
    constructor(name){
        this.name = name
    }
    fly(){
        alert("Mai " +this.name+" UD Raha hu ")
    }
    get name(){
        return this._name
    } 
    set name(value){
        this._name = value.toUpperCase()
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log(`${this.name} eating carrot`);
    }
}

const dog = new Animal("Sheru")
// dog.fly()
console.log(dog.name);

dog.name = "Jack"
console.log(dog.name);


// InstanceOf Operator 
console.log(dog instanceof Animal); 

let c = 99
console.log(c instanceof Animal);  

const rabbit = new Rabbit("Rabbit")
rabbit.eatCarrot()
console.log(rabbit instanceof Animal);  