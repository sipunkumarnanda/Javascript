// const hello = require("./moduleOne")
// hello.hello()
// hello.ahello("Shivani")
// hello.ahello("Garmia")
// hello.ahello("Nitika")
// hello.ahello("Aishwarya")

// Now no need to write like this by using Destructuring

// const {hello , ahello} = require("./moduleOne")   // Common JS 

import { hello , ahello } from "/moduleTwo.js";



hello()
ahello("Shivani")
ahello("Garmia")
ahello("Nitika")
ahello("Aishwarya")