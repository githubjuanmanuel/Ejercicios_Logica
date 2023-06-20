//Dado un número verificar si es un número capicua o no. 
//Los números capicua se leen igual al derecho y al reves.

const Capicua = (num) => {
    let num2 = num.toString().split("").reverse().join("")
    
    if (num === parseInt(num2)) {
        console.log(true);
    }else{ console.log(false)}
}
Capicua(211)

//-----------------------------------------------------------------

function Capi(num) {
    let procesado = parseInt(num.toString().split("").reverse().join(""));
    return procesado === num;
}
console.log(Capi(111))