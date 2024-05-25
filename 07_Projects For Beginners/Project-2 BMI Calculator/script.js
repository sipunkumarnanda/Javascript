const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
// This use case will give you empty value on load . 

form.addEventListener('submit' , ((e)=>{
    e.preventDefault()  // Here we use this because when user click on submit button all data goes to server immediately , we want to prevent that so we use this .

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please give a valid height' ;
    }
    else if(weight === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please give a valid weight' ;
    }
    else{
       const bmi =  (weight / ((height * height)/10000)).toFixed(2)

    //    result.innerHTML = `<span>BMI = ${bmi}</span>`
       if(bmi < 18.6){
        result.innerHTML = `<span>BMI = ${bmi}</span> <br> You are under wight`
    }
    else if (bmi>24.9){
        result.innerHTML = `<span>BMI = ${bmi}</span> <br> You are over wight`
    }
    else{
        result.innerHTML = `<span>BMI = ${bmi}</span> <br> Your weight is normal`
    }
    }
}))