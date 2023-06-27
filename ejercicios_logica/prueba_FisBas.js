//Imprimir una lista de número, los multiplos de tres deben tener la palabra fizz, 
//los multiplos de 5 deben tener la palabra bazz y si es multiplo de ambos debe aparecer fizz bazz

const FisBas = (num1, num2) => {
    let x = num1;
    while(x != num2){
        if (x % 3 === 0 && x % 5 === 0) {
            console.log("fizz bazz");
            x++;
        }else if (x % 3 === 0){
            console.log("fizz");
            x++;
        }else if (x % 5 === 0){
            console.log("bazz");
            x++;
        }else{
            console.log(x);
            x++;
        }
    }
}
FisBas(15,35)
