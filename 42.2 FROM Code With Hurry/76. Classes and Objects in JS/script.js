class RailwayForm{
    submit(){
        alert(this.name + " : Your Form is Submitted For Train Number : " +this.trainNumber)
    }
    cancel(){
        alert(this.name + " : Your Form is cancelled For Train Number : " +this.trainNumber)
    }
    fill(name , trainNumber){
        this.name = name
        this.trainNumber = trainNumber
    }
}

// Create a Form for Sipun 
let sipunForm = new RailwayForm()

// Fill the Form with Sipun's details 
sipunForm.fill("Sipun" , 14316)

// Create a Forms for Harry 
let harryForm1 = new RailwayForm()
let harryForm2 = new RailwayForm()

// Fill the Forms with Harry's details 
harryForm1.fill("Harry" , 14316420)
harryForm2.fill("Harry" , 14316420143)

sipunForm.submit()
harryForm1.submit()
harryForm2.submit()
harryForm1.cancel()