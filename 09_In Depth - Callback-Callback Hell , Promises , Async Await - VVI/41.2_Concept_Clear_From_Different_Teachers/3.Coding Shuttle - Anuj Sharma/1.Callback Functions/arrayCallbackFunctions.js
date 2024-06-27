const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7]

const firstNegative = function(num){
    return num < 0 
}

const result = a.find(firstNegative)
console.log(result);

const findIndex = a.findIndex(firstNegative)
console.log(findIndex);

a.forEach(function(num , index){
    console.log("Array Number" , num , index);
})