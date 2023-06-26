//Dado un número, indicar el tipo de agulo que es.

const angulo = (abertura) => {
    let resultado = "Es un angulo completo"
    if (abertura < 90) {
        resultado= "Es un águlo agudo";
    } else if (abertura  === 90) {
        resultado="Es un águlo recto";
    } else if (abertura > 90 && abertura < 180) {
        resultado="Es un águlo obtuso";
    } else if (abertura === 180) {
        resultado="Es un águlo llano";
    } else if (abertura > 180 && abertura < 360) {
        resultado="Es un águlo mayor de 180°";
    }
    console.log(resultado);
}

angulo(90);