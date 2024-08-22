const sayHello = (name, greeting) => console.log(greeting+" " + name)
sayHello("Harry" , "Good afternoon")  


// Lexical Scope on Normal Function  and Arrow Function 
const x = {
    name : "Harry" ,
    role : "JS Developer" ,
    exp : 30 ,
    show : function(){

        let that = this
        setTimeout(function(){
            console.log(this);
            console.log(`The name is ${that.name} And The role is ${that.role}`);
        },2000)

        console.log("--------------------------------");

       
        setTimeout(()=>{
            console.log(this);
            console.log(`The name is ${this.name} And The role is ${this.role}`);
        },2000)
    }
}
console.log(x.name , x.exp);
console.log(x.show());