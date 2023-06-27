//crear una cuadrado hueco con asteriscos

const arribaAbajo = (num) => {
    let lado = "";
    for (let i = 0; i < num; i++) {
        lado += "* ";
    }
    console.log(lado)
}

const lado = (num) => {
    let lado = "";
    for (let i = 0; i < num; i++) {
        if (i === 0 || i === (num-1)) {
            lado += "* ";
        }else{
            lado+="  "
        }
    }
    console.log(lado)
}

const cuadrado = (num) => {
    arribaAbajo(num);
    for (let i = 0; i < (num-2); i++) {
        lado(num);
    }
    arribaAbajo(num);
}
cuadrado(9);

//------------------------------------------------------------------------
// version del video

const Lado = (num) => {
  let lado = "";
  for (let i = 0; i < num; i++) {
    lado += "* ";
  }
  return lado;
};

function cuadrado2(numero) {
  let dibujo = Lado(numero) + "\n";

  let contenido = "";

  for (let i = 2; i < numero; i++) {
    contenido = "* ";

    for (let z = 0; z < numero - 2; z++) {
      contenido += "  ";
    }
    contenido += "*";
    dibujo += contenido + "\n";
  }
  dibujo += Lado(numero);
  console.log(dibujo);
}
cuadrado2(5);
