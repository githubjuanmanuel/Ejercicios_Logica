//Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un número 
//que indique su tamaño

const dividirArray = (array, num) => {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i += num) {
        let subArray = array.slice(i,i+num);
        nuevoArray.push(subArray);
    }
    console.log(nuevoArray);
}

dividirArray([1,2,3,4,5,5,6,],4)
//-----------------------------------------------------------------------

function divideArray(arreglo_principal, numero_elementos) {
    
    let arreglos = [];

    for (let elemento of arreglo_principal) {

        let ultimo = arreglos[arreglos.length -1];

        if (!ultimo || ultimo.length === numero_elementos) {
            arreglos.push([elemento]);
        }else{
            ultimo.push(elemento);
        }
    }
    return arreglos;
}
//console.log(divideArray([1,2,3,4,5,6],3)) 