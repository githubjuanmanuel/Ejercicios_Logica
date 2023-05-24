//Dado una cadena de texto y un número, recortar el string mostrando los x primeros caracteres

const recortar = (num,texto) => {
    let resultado = "";

    if (typeof texto === 'string' && typeof num === 'number') {
        resultado = texto.substring(0,num);
    }else{
        resultado = "!Introduce bien los resultados¡";
    }
    console.log(resultado);
}

recortar(2,"hola soy juan");
