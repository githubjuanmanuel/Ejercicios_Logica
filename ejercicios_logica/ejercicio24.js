//Dado un array de enteros y un número, detectar si esa lista de números 
//es una permutación del 1 al número aportado

const permutacion = (array, num) => {
    respuesta = true;
    for (let i = 0; i < num; i++) {
        let x = i+1;
        if (x != array[i]) {
            respuesta = false;
            break;
        }
    }
    console.log(respuesta);
}
permutacion([1,2,3,5,7,8],5);
//---------------------------------------------------

function permutacion2(secuencia, numero) {
    for (let i = 0; i < numero; i++) {
        if (secuencia.indexOf(i+1) < 0) {
            return false;
        }
    }
    return true;
}
console.log(permutacion2([1,2,3,4,6,9],9));