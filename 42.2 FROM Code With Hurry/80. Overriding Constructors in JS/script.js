class Employee {
    constructor(name) {
        console.log(`${name} Employee's Constructor is here `);
        this.name = name ;
    }
    login(){
        console.log(`${this.name} Employee has logged in `);
    }

    logout(){
        console.log(` Employee has logged out `);
    }

    requestsLeaves(leaves){
        console.log(` Employee has requested ${leaves} leaves - Auto approved . `);
    }

}
class Programmer extends Employee{

    constructor(name){
        super(name)

        // this.name = name
        console.log(`${this.name} Programmer's Constructor is here  - This is a newly written Constructor `);
    }

    // constructor(...args){
    //     super(...args)          // if there is no constructer in the child class , this is created automatically 
    // }

    requestCoffee(x){
        console.log(`Programmer has requested ${x} cofees .`);
    }

    requestsLeaves(leaves){
        super.requestsLeaves(leaves)
        console.log("One extra is granted");
        // console.log(` Employee has requested ${leaves + 1} leaves (one extra) . `) ;
    }
}

let e = new Employee("Sipun")
e.login()
e.requestsLeaves(3)

console.log("----------------------------");

let p = new Programmer("Harry")
p.requestsLeaves(5)
p.requestCoffee(2)

