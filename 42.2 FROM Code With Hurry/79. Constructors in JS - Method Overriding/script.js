class Employee {

    login(){
        console.log(` Employee has logged in `);
    }

    logout(){
        console.log(` Employee has logged out `);
    }

    requestsLeaves(leaves){
        console.log(` Employee has requested ${leaves} leaves - Auto approved . `);
    }

}

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Programmer has requested ${x} cofees .`);
    }

    requestsLeaves(leaves){
        super.requestsLeaves(leaves)
        console.log("One extra is granted");
        // console.log(` Employee has requested ${leaves + 1} leaves (one extra) . `) ;
    }
}

let e = new Employee()
e.login()
e.requestsLeaves(3)

console.log("----------------------------");

let p = new Programmer()
p.requestsLeaves(5)
p.requestCoffee(2)