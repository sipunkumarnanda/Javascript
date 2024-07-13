const URL = 'https://cat-fact.herokuapp.com/facts' ;

// let promise = fetch(URL)
// console.log(promise);


// Using Promise 

//  const getFacts = ()=>{
//     let p1 = promise.then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         return data
//     })
//     return p1
//  }


async function getFacts(){
    try {
        console.log("Getting Data...");
    let promise = await fetch(URL)
    let response = await promise.json()
    console.log(promise);
    console.log(response);   // JSON Format
    console.log(response[0].text);

    let div = document.querySelector(".catFacts")

    response.forEach(data => {
        // console.log(data.text);
        let li = document.createElement('li')
        li.textContent = data.text
        div.appendChild(li)
    });
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

const factBtn = document.querySelector("#getFacts")
factBtn.addEventListener('click' , (()=>{
    getFacts()
})) 