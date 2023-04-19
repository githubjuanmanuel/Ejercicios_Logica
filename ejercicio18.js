//Dado un número, devolver todos los números divisores de ese número

const divisores = (num)=> {
    console.log("Los divisores son: ")
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

//divisores(5);
//------------------------------------------------------------
//Version del curso

function divisor(numero, posible_divisor) {
    if (numero % posible_divisor === 0) {
        return posible_divisor;
    }
    return 0;
}
function mostrarDivisores(numero) {
    for (let i = 1; i <= numero; i++) {
        let esDivisor = divisor(numero, i);
        if (esDivisor) {
            console.log(esDivisor);
        }
    }
}
mostrarDivisores(8)