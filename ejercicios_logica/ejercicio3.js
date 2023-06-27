//Dado una palabra, buscarla en una frase y devolver cuantas veces aparece.
//La palabra y la frase deben ser parametros en una función

const buscarPalabra = (palabra, frase) => {
  let array = frase.split(" ");
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === palabra) {
      contador++;
    }
  }
  if (contador === 0) {
    console.log(
      "La palabra " + '"' + palabra + '"' + " no aparecio ninguna ves"
    );
  } else {
    console.log(
      "Las veces que se repite la palabra " +
        '"' +
        palabra +
        '"' +
        " son: " +
        contador
    );
  }
};

// buscarPalabra(
//   "y",
//   "hola mi nombre es juan manuel, soy desarrollador de software y soy músico. Se tocar la bateria, el bajo y la guitarra. Tengo un hermano y su nombre es Joel"
// );
//--------------------------------------------------------------------------------------------------

function concidencia(frase, busqueda) {
  let text_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, "");
  let resultado = 0;

  if (text_limpio.includes(busqueda)) {
    let palabras = text_limpio.split(" ");
    let mapa = {};

    for (const palabra of palabras) {
      if (mapa[palabra]) {
        mapa[palabra]++;
      } else {
        mapa[palabra] = 1;
      }
    }

    resultado = mapa[busqueda];
  } else {
    resultado = 0;
  }
  return resultado;
}
console.log(
  "Número de concidencias en la frase: " +
    concidencia(
      "hola mi nombre es juan manuel, soy desarrollador de software y soy musico. Se tocar la bateria, el bajo y la guitarra. Tengo un hermano y su nombre es Joel",
      "y"
    )
);
