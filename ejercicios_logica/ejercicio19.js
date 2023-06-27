//Dado un array de peliculas (titulo, director vista), mostrar todas las peliculas indicando 
//cuales has visto y cuales no. (!Esta es la version del curso¡)

function misPeliculas(peliculas) {
    for (const pelicula of peliculas) {
        let para_mostrar = `"${pelicula.titulo} de ${pelicula.director}"`;
        if (pelicula.vista) {
            console.log("Ya has visto: ",para_mostrar);
        }else{
            console.log("Te falta por ver: ", para_mostrar);
        }
    }
    return peliculas;
}

const coleccion_de_peliculas = [
    {
        titulo: "El señor de los anillo",
        director: "Peter Jackson",
        vista: true
    },
    {
        titulo: "La liga de las justicia",
        director: "Zack Snyder",
        vista: false
    },{
        titulo: "Los vengadores: End Game",
        director: "Joe Russo",
        vista: true
    },{
        titulo: "Batman vs Superman",
        director: "Zack Snyder",
        vista: false
    }
];

misPeliculas(coleccion_de_peliculas);