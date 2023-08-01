//Dado un número, mostrar el listado de los cuadrados de todo los números naturales hasta llegar al mismo

const cuadrado = (numero) => {
    return numero*numero;
}

const mostrar = (numero) => {
    for (let i = 0; i <= numero; i++) {
        console.log(cuadrado(i));
    }
}

mostrar(6);