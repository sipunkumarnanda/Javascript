class React {
    constructor(){
        this.library = "React"
        this.server = "https://localhost:300"

        console.log(this);

        // requirement
        document.querySelector('button')
        .addEventListener('click' , this.handleCkick.bind(this))
    }


    handleCkick(){
        console.log("buttom Clicked");
        console.log(this);
        console.log(this.server);
    }
}

const app = new React() 