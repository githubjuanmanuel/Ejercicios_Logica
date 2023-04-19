//Dado una cadena de texto, devolver el caracter mas usado;

const mas_usado = (texto) => {
    let mapeo_letras = {};
    let maximo_repeticiones = 0;
    let letra_mas_repetida = "";

    for (let letra of texto) {
        if(!mapeo_letras[letra]){
            mapeo_letras[letra] = 1;
        }else{
            mapeo_letras[letra]++;
        }
    }
    for (let letra in mapeo_letras) {
        if (mapeo_letras[letra].toString().trim().length === 1 && mapeo_letras[letra] > maximo_repeticiones) {
            maximo_repeticiones = mapeo_letras[letra];
            letra_mas_repetida = letra;
        }else if (mapeo_letras[letra].toString().trim().length === 1 && mapeo_letras[letra] === maximo_repeticiones){
            maximo_repeticiones = mapeo_letras[letra];
            letra_mas_repetida += " , " + letra;
        }
    }
    
    if (letra_mas_repetida.length > 1) {
        console.log("Hay varias letras usadas la misma cantidad de veces: "+letra_mas_repetida);
    }else{
        console.log("La letra mas repetida es: " + letra_mas_repetida);
    }
}
mas_usado("hola soy juan manuel montoya y tengo 18 años, y estoy en la ");