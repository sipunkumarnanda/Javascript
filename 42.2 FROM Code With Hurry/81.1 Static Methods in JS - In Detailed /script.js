// Creating an Static Method 

class Test {

    displat(){
        console.log("This is a Normal Method - Display Method");
    }
    static show(){
        console.log("This is a Static Method. ");
    }
}

Test.show()  

// We can use Static Method when Any Method Not dependent on Object . No need to Create an Object for Call / Invoked .

let Method = new Test()
console.log(Method);


console.log("------------------------------------------");

// What if Multiple static Methods 
class Test2 {

    displat(){
        console.log("This is a Normal Method - Display Method");
    }

    static show(){
        console.log("This is a Static Method. ");
    }
    static display(){
        console.log("This is Display Static Method. ");
    }
}
Test2.show()
Test2.display()

console.log("------------------------------------------");

// If Same name Static Methods are present 

class Test3 {

    displat(){
        console.log("This is a Normal Method - Display Method");
    }

    static show(){
        console.log("This is a Static Method. - Show");
    }
    static display(){
        console.log("This is Display Static Method. ");
    }

    static show(){
        console.log("This is a Static Method. - Show - 2");
    }
}

Test3.show()  // it will invoke last Written method 

console.log("------------------------------------------");

// Call Static Method through Constructor 

class User {
    constructor(){
        User.show()
    }
    static show(){
        console.log("This is a Static Method. - Show");
        console.log("And this is Call Through Constructor ");
    }
}

let obj = new User()  // Constructor is Automatically called when an Object is Created 

console.log("------------------------------------------");

// call static method inside a Non-Static Method 
console.log("call static method inside a Non-Static Method ");

class Demo {
    static show(){
        console.log(" Static Method");
    }
    display(){
        console.log(" Non-Static Method ");
        Demo.show()
    }
}

let demo = new Demo()
demo.display()



console.log("------------------------------------------");

// Static Variable 
console.log(" -------------- Static Variable --------------------- ");

class Testnew {

    static name = "Sheetal"    // Global Scope 

    static display(){
        console.log(" Static Method " , Testnew.name);
    }
}

Testnew.display()
console.log(Testnew.name);

Testnew.name = "Ankita"
Testnew.display()
console.log(Testnew.name)

console.log("------------------------------------------");

// Static Variable 
console.log(" -------------- Access Static Variable inside NON-Static Method  --------------------- ");

class Testnew2 {

    static name = "Sheetal"    // Global Scope 

    static display(){
        console.log(" Static Method " , Testnew.name);
    }

    show(){
        console.log(" This is a Non - Static Method " , Testnew2.name);
    }
}

let obj2 = new Testnew2()
obj2.show()








































// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     static categorize(){
//         return "This is an Animal. "
//     }
// }

// class Dog extends Animal{
//     constructor(name , breed){
//         super(name)
//         this.breed = breed
//     }
//     static categorize(){
//         return "This is a Dog. "
//     }
// }

// console.log(Animal.categorize());

// console.log(Dog.categorize());