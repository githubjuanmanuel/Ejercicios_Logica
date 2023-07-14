//Dado un array, devolver otro array con el primer y ultimo elemento del original

const Arrays = (array1) => {
    let array2 = [];
    array2.push(array1[0],array1[array1.length-1])
    console.log(array2)
}
Arrays([1,2,3,4,5,6]);