class RailwayForm{
    
    constructor(name , trainNumber , add){
        console.log("CONSTRUCTOR CALLED..." + name + " " + trainNumber);
        this.name = name
        this.trainNumber = trainNumber
        this.address = add
    }

    preview(){
        alert(this.name + " : Your Form is For Train Number : " +this.trainNumber +" and your address is " + this.address)
    }
    submit(){
        alert(this.name + " : Your Form is Submitted For Train Number : " +this.trainNumber)
    }
    cancel(){
        alert(this.name + " : Your Form is cancelled For Train Number : " +this.trainNumber)
        this.trainNumber = 0
    }
}

let harryForm = new RailwayForm("Harry" , 13488 , "420 , Pacific Ocean , Bihar - 0000555")

harryForm.preview()
harryForm.submit()
harryForm.cancel()
harryForm.preview()