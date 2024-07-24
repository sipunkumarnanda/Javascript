class React {
    constructor(){
        this.library = "React"
        this.server = "https://localhost:300"

        console.log(this);

        // requirement
        let a = this.handleCkick.bind(this);  // bind method retuns a Function

        document.querySelector('button')
        .addEventListener('click' , a)
    }


    handleCkick(){
        console.log("buttom Clicked");
        console.log(this);
        console.log(this.server);
    }
}

const app = new React() 

//

//////////////////////////////////////////////////////////

let para = document.querySelector('p')
console.log(para);

const paragraph = function(){
    console.log("Para Clicked");
}

// para.addEventListener('click' , paragraph())  // It's wrong . It's immediately invoked , So only we have to give the reference