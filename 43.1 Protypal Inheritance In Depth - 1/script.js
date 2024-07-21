function Person(city) {
    this.city = city 
    console.log("My name is " , this.name);
    console.log("And iam from " , this.city);
}


let obj = {
    name : "Sipun" , 
    age : 20
}
let obj2 = {
    name : "Deepika" , 
    age : 19
}

Person.call(obj , "BBSR")
console.log("----------------------------------");
Person.call(obj2 , "Puri")
Person.call( " ","Utarakhand")

//////////////////////////////////////////////////////////////////
console.log("----------------------------------");

function Person2(name) {
    this.name = name;
}

Person2.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
};

function Employee(name, jobTitle) {
    this.jobTitle = jobTitle;

    Person2.call(this, name);
    // Person2.call(" ", name);
}

// Employee.prototype = Object.create(Person2.prototype);
Employee.prototype = Person2.prototype

Employee.prototype.sayJobTitle = function() {
        console.log(`I am a ${this.jobTitle}.`);
    };


const john = new Employee('John', 'Developer');
john.sayJobTitle()
john.sayHello();