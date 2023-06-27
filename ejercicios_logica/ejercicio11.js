//Dado un texto y una busqueda, censurar todas las concidencias de la busqueda
//en el texto con [-CENSURADO-]

const censurar = (texto, palabra) => {
    if (texto == null && palabra == null) {
        console.log("No puedes leer el texto y la busqueda");
    }else if (palabra == null) {
        console.log("No puedes hacer la busqueda");
    }else{

       let palabras = texto.split(" ");
       
       for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabra) {
            //console.log(palabras[i], palabra)
            palabras[i] = "[-CENSURADO-]"
        }
        
       }
       let text = palabras.join(" ");
       console.log(text);
    }
}

censurar("hola soy juan", "soy");
//---------------------------------------------

function censurado(texto = false, busqueda = false) {
    let resultado = "";

    if (!texto && !busqueda) {
        resultado = "No puedes leer el texto y la busqueda";
    }else if (!texto && busqueda) {
        resultado = "No puedes leer el texto";
    }else if (texto && !busqueda) {
        resultado = "No puedes realizar la busqueda";
    }else if (texto && busqueda) {
        resultado = texto.replace(new RegExp(busqueda,'gi'),"[-CENSURADO-]");
    }

    return resultado;
}
console.log(censurado("hola hola hello","hola"));