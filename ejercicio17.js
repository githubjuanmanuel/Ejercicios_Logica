//Prueba fiss bass pero cambiando por buzz lightyear

const buzzlightyear = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("BuzzLightyear")
        }else if (i % 3 === 0){
            console.log("Buzz")
        }else if (i % 5 === 0) {
            console.log("Lightyear");
        }else{console.log(i)}
    }
}
// buzzlightyear(9);

//-----------------------------------------------------------------
//Version del curso

function Buzz(num) {
    let resultado = "";
    if (num % 3 === 0 && num % 5 === 0) {
        resultado = "BuzzLightyear";
    }else if (num % 3 === 0){
        resultado = "Buzz";
    }else if (num % 5 === 0) {
        resultado = "Lightyear";
    }else{
        return num;
    }
    return resultado;
}


function imprimir(num) {
    for (let i = 1; i <= num; i++) {
        console.log(Buzz(i));
    }
}
imprimir(15);