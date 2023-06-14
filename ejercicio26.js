//Dado un número, mostrar su serie de fibonacci. La serie de fibonacci es un orden de números donde cada uno es
//la suma de los dos anteriores.

const fibonacci = (num) => {
    let suma = 1;
    let numeros = [0,1];

    for (let i = 2; i <= num; i++) {
        numeros[i] = numeros[i-1] + numeros[i-2];
        suma+=numeros[i];
    }
    console.log(numeros,suma);
}
fibonacci(10);
//---------------------------------------------------------

const fibonacci2 = (num) => {
    let numeros = [0,1];

    for (let i = 2; i <= num; i++) {
        numeros.push(numeros[i-1] + numeros[i-2]);
    }
    console.log("Serie: "+numeros +"\nResultado: "+numeros[num]);
}
fibonacci2(12);