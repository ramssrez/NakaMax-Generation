/* alert("Esto esta conectado"); */


window.onload = function(){
  var contenedor = document.getElementById('contenedor_carga');
  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0'; 
}


productosDisp = [];
categorias = ["Personalizable", "Escolares", "Accesorios", "Electronica", "Figuras", "Posters y Cuadros", "Peluches", "Hogar", "", "" ];


productoEjemplo = {
  nombreDeProducto: "soy un ejemplo",
  precio = 200,
  decripcion = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas repudiandae vero sequi? Blanditiis voluptas odio voluptates, vitae dolorem esse vero, rerum magni, debitis corrupti soluta odit ipsum ipsam laborum.",
  esPersonalizable = true,
  disponibles = 100,
  categoria = [0,1],
  imagenes = ["url1", "url2"]
};