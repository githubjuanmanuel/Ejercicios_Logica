// Forma tradicional
function obtenerLongitud(cadena) {
    return cadena.length;
  }
  
  // Versión flecha
  const obtenerLongitudFlecha = (cadena) => cadena.length;
  
  console.log(obtenerLongitud("Hola")); // Salida: 4
  console.log(obtenerLongitudFlecha("Hola")); // Salida: 4

//----------------------------------------------------  

// Forma tradicional
function duplicarNumero(numero) {
    return numero * 2;
}

// Versión flecha
const duplicarNumeroFlecha = (numero) => numero * 2;

console.log(duplicarNumero(5)); // Salida: 10
console.log(duplicarNumeroFlecha(5)); // Salida: 10

//----------------------------------------------------  

// Forma tradicional
function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

// Versión flecha
const sumarArrayFlecha = (array) => array.reduce((a, b) => a + b, 0);

console.log(sumarArray([1, 2, 3, 4])); // Salida: 10
console.log(sumarArrayFlecha([1, 2, 3, 4])); // Salida: 10


//----------------------------------------------------  


// Forma tradicional
function obtenerNombreCompleto(objeto) {
    return objeto.nombre + " " + objeto.apellido;
  }
  
  // Versión flecha
  const obtenerNombreCompletoFlecha = (objeto) =>
    `${objeto.nombre} ${objeto.apellido}`;
  
  console.log(obtenerNombreCompleto({ nombre: "John", apellido: "Doe" })); // Salida: "John Doe"
  console.log(obtenerNombreCompletoFlecha({ nombre: "John", apellido: "Doe" })); // Salida: "John Doe"
  


//----------------------------------------------------