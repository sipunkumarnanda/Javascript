function setUsername (username , email){
    // Complex DB Call
    this.username = username
    console.log("Called" , this.username);
}

function createUser(username , email , password){
    setUsername.call(this , username)

    this.email = email 
    this.password = password
}

const chai = new createUser("Chai" , "chai@facebook.com" , "123")
console.log(chai);  