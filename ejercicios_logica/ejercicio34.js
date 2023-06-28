//Dados dos números, devolver los resultados de la operaciones basicas.

const calcular = (num1,num2) => {
    console.log(`
    La suma es: ${num1+num2}
    La resta es: ${num1-num2}
    La multiplicación es: ${num1*num2}
    La división es: ${num1/num2}
    `)
}
// calcular(5,1);

//--------------------------------------------------------------

const calculadora = (num1,num2) =>{
    let resultado = `
        La suma es: ${num1+num2}
        La resta es: ${num1-num2}
        La multiplicación es: ${num1*num2}
        La división es: ${num1/num2}
    `;
    console.log(resultado);
}
calculadora(4,4);