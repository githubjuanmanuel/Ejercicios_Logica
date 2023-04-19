//Dado una cadena de texto, devolver cuantas vocales tiene (a,e,i,o,u);

const vocales = (texto) => {
    let contador = 0;
    let frase = texto.toLowerCase().trim();
    for (let letra of frase) {
        switch (letra) {
            case "a":
                contador++;
                break;
            case "e":
                contador++;
                break;
            case "i":
                contador++;
                break;
            case "o":
                contador++
                break;
            case "u":
                contador++;
                break;
            default:
                break;
        }
    }
    console.log("La cantidad de vocales es: "+contador);
}
vocales("Hola mi nombre es Juan Manuel");
//----------------------------------------------------
//Version del curso

function vocales2(texto) {
    let coincidencias = texto.match(/[aeiou]/gi);
    return coincidencias ? coincidencias.length : 0;
}
console.log("La cantidad de vocales es: "+ vocales2("Hola mi nombre es Juan Manuel"));