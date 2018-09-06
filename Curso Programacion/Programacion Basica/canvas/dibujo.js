var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l=0;
var xi,yi,xf,yf;
var colors = "#FAA";



for (l = 0; l < lineas; l++) {
  yi=10*l;
  xf=10*(l+1);
  dibujarlinea("black",0,yi,xf,300);
  console.log("Linea" +l);
}

for (l = 0; l < lineas; l++) {
  xi=10*l;
  yf=300-(10*(l+1));
  dibujarlinea("red",xi,300,300,yf);
  console.log("Linea" +l);
}






function dibujarlinea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
