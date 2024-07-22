console.log("------------------------------------------------");

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User {
    constructor(username , emial , password){
        super(username)
        this.email = this.email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai" , "chai@gmail.com" , "123")
chai.addCourses()
chai.logMe()

const masalaChai = new User("MasalaChai")
masalaChai.logMe()
// masalaChai.addCourses()

console.log(chai === masalaChai);
console.log(chai === Teacher);

console.log(chai instanceof Teacher);
console.log(chai instanceof User);