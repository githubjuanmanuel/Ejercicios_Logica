//Dado un string, ponerlo por completo en mayusculas o minusculas dependiendo si hay mas mayusculas o minusculas
//por defecto en el string

const mayusMinus = (texto) => {
    let resultado = "";
    let contador1 = 0;
    let contador2 = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === texto[i].toUpperCase()) {
            contador1++;
        }else if (texto[i] === texto[i].toLowerCase()) {
            contador2++;
        }
    }
    if (contador1 > contador2) {
        resultado = texto.toUpperCase();
    }else if (contador2 > contador1) {
        resultado = texto.toLowerCase();
    }
        
    console.log(resultado);
}
mayusMinus("Hola SOY Juan Manuel Montoya");

//---------------------------------------------------------
function MayusMinus2(Text) {
    let result= "";
    let mayusculas = 0;
    let minusculas = 0;

    for (let letra of Text) {
        if (/[A-Z]/.test(letra)) {
            mayusculas++;
        }else{
            minusculas++;
        }
    }
    if (mayusculas > minusculas) {
        result = Text.toUpperCase();
    }else{
        result = Text.toLowerCase();
    }
    return result;
}
console.log(MayusMinus2("Hola SOY JUAN MANUEL Montoya"));