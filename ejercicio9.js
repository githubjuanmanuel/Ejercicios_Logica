//Dados 2 arrays, devolver 1 array con los elementos comunes entre ellos

const nuevoArray = (array1, array2) => {
    const filtrado = array1.filter(elemento => array2.includes(elemento));
    console.log(filtrado);
}

nuevoArray([1,3,5,7,9], [1,2,3,4,5,6]);

//------------------------------------------------------------

function elementosComunes(array1,array2) {
    const filtrado2 = array1.filter(elemento => {
        return array2.includes(elemento)
    });
    console.log(filtrado2);
}

elementosComunes([2,3,4,5,6,7,8],[1,2,5,4,6,9]);