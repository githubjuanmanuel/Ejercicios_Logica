//Dada dos cadenas de texto devolver si son anagramas, osea si utilizan las mismas letras

function LimpiarTextos(text){
    return text.replace(/[^\w]/gi,'').toLowerCase().split('').sort().join();
}

const anagramas = (text1,text2) => {
    return LimpiarTextos(text1) === LimpiarTextos(text2); 
}

console.log(anagramas("juan.-,.+{}","juna"))