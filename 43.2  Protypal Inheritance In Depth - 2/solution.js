// Define Person constructor
function Person(name) {
    this.name = name;

    console.log("This - ", this); 
    console.log("Good morning ", this.name);
}


Person.prototype.Sayhello = function() {
    console.log(`hyy Good morning ${this.name}`);
    console.log(`Are you from ${this.city} ??`);
}


// Define Employee constructor
function Employee(name, age, city) {

    // Initialize Employee-specific properties
    this.age = age;
    this.city = city;

    console.log(this);
    Person.call(this)

    // Borrow the Person constructor to initialize the name property
    Person.call(this, name);
}


// Set up the prototype chain
Employee.prototype = Object.create(Person.prototype);

console.log("Constructor - " , Employee.prototype.constructor);

Employee.prototype.constructor = Employee;

console.log(console.log("Constructor 2 - " , Employee.prototype.constructor));

// Define methods on Employee prototype
Employee.prototype.message = function() {
    console.log(`Your Message is here ${this.name}`);
}


// Creating an Employee instance
let emp1 = new Employee("Sipun", 20, "BBSR");
emp1.Sayhello(); // Outputs: hyy Good morning Sipun
emp1.message(); // Outputs: Your Message is here Sipun







// Creating a Person instance
// let emp2 = new Person("Ankita");
// emp2.Sayhello(); // Outputs: hyy Good morning Ankita

// emp2.message(); // This will throw an error because Person instances do not have the message method



/*
NOTES - : 

Employee.prototype.constructor = Employee; 

It is used to correctly set the constructor property of the Employee.prototype object. This ensures that the constructor property points back to the Employee function, maintaining proper reference and allowing for accurate type checking and inheritance.

Why It's Important
When you set up inheritance by using Object.create(), the constructor property of the new prototype object is inherited from the parent, not the child. This means it points to the parent constructor. By explicitly setting Employee.prototype.constructor = Employee;, you correct this reference.
*/