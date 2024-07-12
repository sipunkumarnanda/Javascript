// export function multiply(a , b , c){
//     return a*b*c
// }
// export function addition(a , b , c){
//     return a + b + c
// }


////////////////////////////////////

// We can export like this also 
function multiply(a , b , c){
    return a*b*c
}
  function addition(a , b , c){
    return a + b + c
}
// export{
//     multiply , addition
// }
export{
    multiply as mul ,
    addition as add
}
///////////////////////////////////////
export const student_Count = 1100
/////////////////////////////////
export default function square(a){
    return a*a
}