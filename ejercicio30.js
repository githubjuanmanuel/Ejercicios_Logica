//Dado un array de números, devolver el array sin elementos duplicados.
//Si hay un string, eliminarlo del array.

const Eliminar_Duplicados = (elementos) => {
    elementos = elementos.filter(elemento => {
        return typeof elemento === "number";
    }); 
    
    let set = new Set(elementos);

    console.log(Array.from(set));
}

Eliminar_Duplicados(["uno",1,1,2,4,3,6,6,6,"dos",5,3])