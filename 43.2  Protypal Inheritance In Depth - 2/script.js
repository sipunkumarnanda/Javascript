
function Person(name){
    this.name = name

    console.log("This - ",this); 
    console.log("Good morning " , this.name);
}

Person.prototype.Sayhello = function(){
    console.log(`hyy Good morning ${this.name}`);
    console.log(`Are you from  ${this.city} ??`);
}


function Employee(name , age , city){
    this.age = age 
    this.city = city

    console.log(this);

    // Person.call(this)

    // Person.call(this , "Alisha")

    Person.call(this , name)

}

console.log("---------------------------------");
console.log(Employee.prototype);

console.log("---------------------------------");
console.log(Person.prototype);


Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee;

console.log("---------------------------------");
console.log(Employee.prototype);


Employee.prototype.message = function(){
    console.log(`Your Message is here ${this.name}`);
}


let emp1 = new Employee("Sipun" , 20 , "BBSR")
emp1.Sayhello()
emp1.message()

///////////////////////////////////

console.log("-------------------------------------");
const student = {
    year : "2nd" ,
    marks : 600

}


Person.call("Sipun")
Person.call(student , "Sipun Kumar Nanda")