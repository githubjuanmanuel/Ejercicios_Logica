//Dado un número, mostrar  a cuantos años, meses y dias equivale

const Calcular = (num) =>{
    let anios = Math.floor(num/365);
    let dias_restantes = (num%365);
    let meses = Math.floor(dias_restantes/30);
    dias_restantes = (dias_restantes%30);
console.log(`Esto equivale a ${anios} años, ${meses} meses y ${dias_restantes} días`);
}

Calcular(100);