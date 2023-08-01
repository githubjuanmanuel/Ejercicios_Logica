//Dado un array o un texto, devolver el elemento o la palabra que mas se repiten

const El_que_mas_aparece = (datos) => {
    let mapeo = {},
    mas_frecuente = "",
    valor_mas_frecuente = 0;

    if (typeof datos === "string") {{
        datos = datos.split(' ')
    }
        
    }

    for (let elemento of datos) {
        if (mapeo[elemento]) {
            mapeo[elemento]++;
        }else{
            mapeo[elemento] = 1;
        }
    }

    for (let elemento in mapeo) {
        if (mapeo[elemento] > valor_mas_frecuente) {
            valor_mas_frecuente = mapeo[elemento];
            mas_frecuente = elemento;
        }
    }
    return {
        "mas_frecuente": mas_frecuente,
        "mayor_valor": valor_mas_frecuente
    };
}
console.log(El_que_mas_aparece([1,2,3,4,4,3,3,2,1,2,3,0,4,5,6,6,6]))