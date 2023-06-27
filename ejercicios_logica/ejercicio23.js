//Dado una cadena de texto, poner en mayúscula la primera letra de cada palabra y devolver la cadena.

const mayusculas = (texto) => {
    let resultado="";

    for (const letra in texto) {
       if (texto[letra -1] === " " || parseInt(letra) === 0) {
        resultado += texto[letra].toUpperCase();
       }else{
        resultado += texto[letra];
       }
    }
    console.log(resultado);
}
mayusculas("hola soy juan");

function mayuscula(text) {
    let palabras = [];
    for (let palabra of text.split(" ")) {
        // palabras.push(palabra[0].toUpperCase()+palabra.slice());
        palabras.push(palabra[0].toUpperCase() +  palabra.substring(1));
    }
    return palabras.join(' ');
}
console.log(mayuscula("hola soy joel"))