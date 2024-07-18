let a = {
    name2: "Sipun" ,
    language: "Javascript" ,
    run: function(){
        alert("Self run")
    }
}
console.log(a);

let p = {
    run: function(){
        alert("run")
    }
}

a.__proto__ = p 
// a.run()

p.__proto__ = {
    name: "Jackie"
}
console.log(a.name);