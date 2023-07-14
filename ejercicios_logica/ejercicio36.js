//Dado un texto, devolver cuantas consonantes y cuantas vocales tiene.

const cuenta_letras = (text) => {
    let consonantes = 0, vocales = 0, texto_limpio = "";

    texto_limpio =  text.split('').filter(letra => /[áéíóú\w]/gi.test(letra) && isNaN(letra)).join('');
    for (let letra of texto_limpio) {
        if (/[áéíóúaeiou]/gi.test(letra)) {
            vocales++;
        }else{
            consonantes++;
        }
    } 

    console.log(`Consonantes: ${consonantes} \nVocales: ${vocales}`)
}
cuenta_letras("Hola soy juan manuel jijijajaja $##$%&/()");
