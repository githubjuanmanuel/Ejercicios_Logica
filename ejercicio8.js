//Dado un número entero, inviertelo y devuelve de nuevo el entero

const invertir = (num) => {
    let invertido = num.toString().split('').reverse().join('')
    invertido = parseInt(invertido);
    console.log(invertido);
}
invertir(45);

//---------------------------------------------------------------
//Versión del curso

function invertirNumero(num) {
    let numero = parseInt(num
                .toString()
                .split('')
                .reverse()
                .join('')
                ) * Math.sign(num);
    return numero;
}
console.log(invertirNumero(-79));

//-----------------------------------------------------
const invertir2 = (num) => { let invertido2 = parseInt(num.toString().split('').reverse().join('')
) * Math.sign(num);
console.log(invertido2);
}
invertir2(-12)