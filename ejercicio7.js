//Dados unos números, devolver cuantos números impares hay entre ellos

const numImpares = (num1, num2) => {

    let contador = 0;
     
    for (let i = num1; i < (num2 + 1) ; i++) {
        if (i % 2 != 0) { contador++; }
    }
    console.log("Los números impares entre " + num1 + " y " + num2 + " es: " + contador);
}
numImpares(1, 10);
//--------------------------------------------------------------------------------------

//Versión del curso

function impares(num1, num2) {
    let Contador = 0;

    while (num1 < num2) {
        if (num1 % 2 != 0){ Contador++;}
        
        num1++;
    }
    return Contador;
}
console.log("Numeros impares: " + impares(1,20))