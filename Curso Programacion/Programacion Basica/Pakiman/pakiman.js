class Pakiman
{
  constructor (n,v,a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }

  hablar()
  {
  alert(this.nombre);
  }

  mostrar()
  {
    document.write("<p>")
    document.body.appendChild(this.imagen)
    document.write("Nombre: "+"<strong>"+ this.nombre + "</strong><br />")
    document.write("Vida: "+ "<strong>"+ this.vida + "</strong><br />")
    document.write("Ataque: "+ "<strong>"+ this.ataque   + "</strong><br /><hr>")

    document.write("</p>")
  }

}
