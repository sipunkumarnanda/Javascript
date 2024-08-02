
const User3 = {
    _email : "S@sn.com" , 
    _password : "abc" ,



    get email(){
        return this._email.toUpperCase()
    } , 
    set email(value){
        this.email = value
    }
}

const tea = Object.create(User3)
console.log(tea.email);