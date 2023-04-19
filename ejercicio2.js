//Dado una cadena de texto , comprobar si es un palindromo o no. 
//Los palindromos son las palabras que se leen igual al derecho y al reves

function verificarCadena(a) {
    
    let b = "";
    for (let i = 0; i < a.length; i++) {
       b = a[i] + b;
    }
    if (a === b){
        console.log(a +' es palindromo')
    }else{
        console.log(a +' no es palindromo')
    }   
}

//verificarCadena('oto');
//-------------------------------------------------------------------------------

function verificarCadena2(a) {
    let b = a.split('').reverse().join('')
    if (a === b){
        console.log(a +' es palindromo')
    }else{
        console.log(a +' no es palindromo')
    }   
}
verificarCadena2('');
//-----------------------------------------

const arr = (cadena) => {
    let a = cadena.split('')
    console.log(a[1], a[3], a.pop())
    console.log(a)
}
arr('palindromo')