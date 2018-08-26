var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
} ;

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{


switch (evento.keyCode) {

  case teclas.UP:
    console.log("Vamo pa arriba");
  break;

  case teclas.DOWN:
    console.log("Vamo pa abajo");
  break;

  case teclas.LEFT:
    console.log("Vamo pa Izq");
  break;

  case teclas.RIGHT:
    console.log("Vamo pa derecha");
  break;
  default:
    console.log("Otra tecla");

}

}
