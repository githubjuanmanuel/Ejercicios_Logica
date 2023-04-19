//Dado un número, mostrar todos los números de ese al 0 de 8 en 8
//en una lista con guiones donde cada número debe empezar por n°

const listaNum = (num) => {
    let contador = num;

    while(contador >= 0 ){
        console.log("-n°"+contador);
        contador -= 8;
    }
}
// listaNum(24);

//----------------------------------------------------------------------

function hastaCero(numero){
    let resultado = `--- Del ${numero} al 0 ---\n`;

    while (numero > 0) {
        resultado += `-n°${numero} \n`;
        numero -= 8;
    }
    if (numero <= 0 ) {
        resultado += "-n°0\n"
    }
    resultado += "--- Fin ---";

    return resultado;
}
console.log(hastaCero(18))