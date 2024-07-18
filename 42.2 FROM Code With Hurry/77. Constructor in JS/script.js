class RailwayForm{
    constructor(name , trainNumber){
        console.log("CONSTRUCTOR CALLED..." + name + " " + trainNumber);
        this.name = name
        this.trainNumber = trainNumber
    }
    submit(){
        alert(this.name + " : Your Form is Submitted For Train Number : " +this.trainNumber)
    }
    cancel(){
        alert(this.name + " : Your Form is cancelled For Train Number : " +this.trainNumber)
    }
}

// Create and Fill a Form for Sipun 
let sipunForm = new RailwayForm("Sipun" , 14316)

// Create and Fill a Forms for Harry 
let harryForm1 = new RailwayForm("Harry" , 14316420)
let harryForm2 = new RailwayForm("Harry" , 14316420143)

// sipunForm.submit()
// harryForm1.submit()
// harryForm2.submit()
// harryForm1.cancel()