//Dado un string  y un número, repetir el string tantas veces como el número indique.

const repetir= (palabra,num) => {
    contador = 0;
    frase = "";
    while(contador <= (num-1)){
        frase += palabra;
        contador++;
    }
    console.log(frase);
}
repetir("hola",3)

//-----------------------------------------------------------------------
//Versiones del curso

//versión 1 función tradicional
function repiteme(texto,numero_repeticiones) {
    let resultado = "";
    for (let i = 0; i < numero_repeticiones; i++) {
        resultado += texto;
    }
    return resultado;
}
console.log(repiteme("victor",8));

//versión 2 función prototipo
String.prototype.repiteme = function (numero_repeticiones) {
    let resultado = "";
    for (let i = 0; i < numero_repeticiones; i++) {
        resultado += this;
    }
    return resultado;
}
console.log("hola mi nombre es juan ".repiteme(4));