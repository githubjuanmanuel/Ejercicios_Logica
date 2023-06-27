//Dado un número, mostrar una escalera con escalones de "[-]" usando el número 
//para los niveles de la escalera

const escalera = (num) => {
    for (let i = 1; i < (num + 1); i++) {
        console.log("[-]".repeat(i));
    }
}
 escalera(6);

//---------------------------------------------------
//Version del video 

function escalera2(num) {
    let escalera_completa = "";

    for (let i = 1; i <= num; i++) {
        let escalones = "";
        for (let x = 1; x <= i; x++) {
            escalones+= "[-]";
        }        
        escalera_completa += escalones + "\n";
    }
    return escalera_completa;
}
//console.log(escalera2(8));