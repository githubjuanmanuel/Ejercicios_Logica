//Invertir cadena de texto sin utilizar metodos

const invertir = (cadena) => {
    let CadenaInvertida = "";
    for(let letra of cadena){
      CadenaInvertida = letra + CadenaInvertida;
    }
    console.log(CadenaInvertida);
}
invertir("juan");

//-------------------------------------------
function invertirTexto(texto) {
    let Invertido = "";
    for(let letra of texto){
      Invertido = letra + Invertido;
    }
    return Invertido
}
console.log(invertirTexto("joel"));

//-------------------------------------------------
// invertir una cadena con metodos

const invertir2 = (txt) => {
    let text = txt.split("").reverse().join('')
    console.log(text)
}
invertir2("popeta")