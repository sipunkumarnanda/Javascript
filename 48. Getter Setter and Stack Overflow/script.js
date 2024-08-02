class User {
    constructor(email , password){
        this.email = email ;
        this.password = password ;
    } 

    
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }


    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Sipun`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const sipun = new User("sipun@google.com" , "123abc")
console.log(sipun.password);    
console.log(sipun.email);