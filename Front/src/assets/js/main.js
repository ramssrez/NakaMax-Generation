/* alert("Esto esta conectado"); */



productosDisp = [];
categorias = ["Artesanal", "Escolares", "Accesorios", "Electronica", "Figuras", "Posters y Cuadros", "Peluches", "Hogar", "", "" ];


productoEjemplo = {
  nombreDeProducto: "soy un ejemplo",
  precio: 200,
  decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas repudiandae vero sequi? Blanditiis voluptas odio voluptates, vitae dolorem esse vero, rerum magni, debitis corrupti soluta odit ipsum ipsam laborum.",
  esArtesanal: true,
  disponibles: 100,
  categoria: [0,2,3],
  imagenes: ['url','otro url']
};

window.onload = function(){
  var contenedor = document.getElementById('contenedor_carga');
  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0'; 
  contenedor.style.display = "none";
}