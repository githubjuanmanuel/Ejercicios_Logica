const numbers = [1, 2, 3, 4];
let numbers_v2 = [];

for (let i of numbers) {
    numbers_v2.push(i * 2);
}

// Versión usando map

let numbers_v3 = numbers.map(i => i * 2);

console.log(numbers);
console.log(numbers_v2);
console.log(numbers_v3);


console.log('');

// ---------------------------------------------------//
const listaOriginal = [1, 2, 3, 4, 5];


const nuevaLista = listaOriginal.map(function sumaUno(elementoActual) {
    return elementoActual + 1;
});


const nuevaLista_v2 = listaOriginal.map(elementoActual => elementoActual + 1);

console.log(nuevaLista); // [ 2, 3, 4, 5, 6 ]
console.log(nuevaLista_v2); // [ 2, 3, 4, 5, 6 ]


// ---------------------------------------------------//

// Piensa en la función sumaUno() del ejemplo anterior. La función se declara en el momento de pasársela 
// como parámetro a map(). Pero ¿qué pasaría si no fuese así?

function sumaUno(valor) {
    return valor + 1;
}

const sumaUno = valor => valor + 1;// version flecha


const listaOriginal2 = [1, 2, 3, 4, 5];

//   const nuevaLista2 = listaOriginal2.map(sumaUno);
const nuevaLista2 = listaOriginal2.map((valor) => valor + 1);

console.log(nuevaLista2); // [ 2, 3, 4, 5, 6 ]

// ------------ Puedes transformar cualquier cosa ---------------------//

// Hasta ahora hemos visto un ejemplo muy sencillo, aplicando transformaciones a listas de números. 
// Pero la potencia de map() es que la función de transformación puede devolver cualquier cosa. 
// No necesariamente ha de ser del mismo tipo que recibe por parámetro. Por ejemplo:
console.log('');
const vengadores = [
    { nombre: "Tony", apellidos: "Stark" },
    { nombre: "Steve", apellidos: "Rogers" },
    { nombre: "Bruce", apellidos: "Banner" },
    { nombre: "Natasha", apellidos: "Romanoff" },
    { nombre: "Thor", apellidos: "Odinson" },
    { nombre: "Clint", apellidos: "Barton" },
  ];
  
//   function generarNombre({ nombre, apellidos }) {
//     return `${nombre} ${apellidos}`;
//   }

const generarNombre = ({ nombre, apellidos }) => `${nombre} ${apellidos}`
  
  const nombres = vengadores.map(generarNombre);
  
  console.log(nombres); // ["Tony Stark", "Steve Rogers", "Bruce Banner", "Natasha Romanoff", "Thor Odinson", "Clint Barton"]
  