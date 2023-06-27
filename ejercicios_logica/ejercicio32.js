//Dado un array de números, devolver el array con sus números elevados al cuadrado.
//Se debe eliminar cualquier contenido que no sea numerico.

const Cuadrado = (elementos) => {
    elementos = elementos.filter(elemento => 
        typeof elemento === "number"
    ); 
    
    for (let i = 0; i < elementos.length; i++) {
        elementos[i] = elementos[i]*elementos[i];        
    }
    console.log(elementos);
}
Cuadrado([1,2,3,4,"dos","tres","%","/",5]);

//---------------------------------------------------------

function alCuadrado(numeros) {
    let numerosCuadrados = numeros
    .filter(numero => typeof numero === "number")
    .map(numero => Math.pow(numero,2));
    return numerosCuadrados;                            
}
console.log(alCuadrado([1,2,3,4,"dos","tres","%","/",5]));