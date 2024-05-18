// Immediately Invoked Function Expression (IIFE)     // ()() 

// Why we use it - Global scope k pollution se problem hoti hai kai bar , to us Global scope k variable (jo v wahan declaration hai) uske pollution ko hotane k liye use karte hai 


// Named IIFE
(function chai(){                
    console.log("DB CONNECTED");
})();   // Here we have to terminate the IIFE 


( (name) => {                    // Simple Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`); 
})('Sipun Kumar')
