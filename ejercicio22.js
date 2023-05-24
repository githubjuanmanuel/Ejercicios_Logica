//Dados dos números, indicar cual es el mayor y cual es el menor

const Mayor_Menor = (num1,num2) => {
    let mayor;
    let menor;
    if (num1 < num2) {
        mayor = num2;
        menor = num1;
        console.log("El mayor es: "+ mayor + "\nEl menor es: "+ menor);
    }else if (num1 > num2) {
        mayor = num1;
        menor = num2;
        console.log("El mayor es: "+ mayor + "\nEl menor es: "+ menor);
    }else{
        console.log("Los números son iguales")
    }
}

Mayor_Menor(3,2);

//------------------------------------------------------------------------------
//Version del curso

function mayorMenor(num1,num2) {
    let resultado = "";
    if (num1 === num2) {
        resultado = "Los número son iguales";
    }else if (num1 > num2) {
      resultado = `El número mayor es ${num1} \nEl número menor es ${num2}`;
    }else if (num1 < num2) {
      resultado = `El número mayor es ${num2}\n El número menor es ${num1}`;
    }else{
        resultado = "Introduce los números correctos"
    }
    return resultado;
}
console.log(mayorMenor(2,3));