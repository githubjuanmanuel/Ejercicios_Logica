//Dado un número, devolver el factorial

const Factorial = (num) => {
    let fac = 1;
    
    for (let i = 1; i <= num; i++) {
        fac *= i;
    }
    console.log(`El factorial de ${num} es : ${fac}`);
}
Factorial(8);