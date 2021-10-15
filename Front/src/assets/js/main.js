/* Constantes */
const categorias = ["Personalizable", "Escolares", "Accesorios", "Electronica", "Figuras", "Posters y Cuadros", "Peluches", "Hogar", "Coleccionable", ""];
const carrito = [00];


/* Variables */
productosDisp = [
  /* productoEjemplo = {
    nombreDeProducto: "soy un ejemplo",
    precio: 200,
    decripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas repudiandae vero sequi? Blanditiis voluptas odio voluptates, vitae dolorem esse vero, rerum magni, debitis corrupti soluta odit ipsum ipsam laborum.",
    esPersonalizable: true,
    disponibles: 100,
    categorias: [0, 1],
    imagenes: ["url1", "url2"]
  }, */
  IronManCab = {
    nombreDeProducto: "Iron Man cabezon",
    precio: 899,
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas repudiandae vero sequi.",
    esPersonalizable: false,
    disponibles: 50,
    categorias: [4, 8],
    imagenes: ["./src/assets/images/pp-cards/iron-man.jpg"]
  },
  ShusuiSwordRoronoaZoroOnePiece = {
    nombreDeProducto: "Shusui Sword Roronoa Zoro - One Piece",
    precio: 1650.99,
    descripcion: "",
    esPersonalizable: false,
    disponibles: 15,
    categorias: [8],
    imagenes: ["./src/assets/images/imagen-producto.png"]
  }

];
// Liseners

  /* let atributos = "?";
  carrito.forEach(element => atributos += "," + element);  
  document.location.href = "./10-carritoWindow.html" + atributos; */


// Funciones

const insertaImgEnCard = (id, producto) => {
  const $img = document.querySelector(`#${id}`);
  $img.src = productosDisp[producto].imagenes[0];
}
const insertaTitEnCard = (id, producto) => {
  const $tit = document.querySelector(`#${id}`);
  $tit.textContent = productosDisp[producto].nombreDeProducto;
}
const insertaDescEnCard = (id, producto) => {
  const $descripcion = document.querySelector(`#${id}`);
  $descripcion.textContent = productosDisp[producto].descripcion;
}
const insertaPresEnCard = (id, producto) => {
  const $precio = document.querySelector(`#${id}`);
  $precio.textContent = "$"+productosDisp[producto].precio;
}

const creaCard = (idProducto) => {
  insertaImgEnCard(`imgProducto${idProducto}`, 0);
  insertaTitEnCard("tituloProducto" + idProducto, 0);
  insertaPresEnCard("precioProducto" + idProducto, 0);
  insertaDescEnCard("descProducto" + idProducto, 0);
}
let idProducto = `00`;
creaCard(idProducto); //solo cargar en el index
  
 const rellenaCarrito = () => {
  let elementosCarrito = location.search;
  console.log(elementosCarrito);
  insertaImgEnCard("imgProdCarr1",1);
}
/*rellenaCarrito(); */ // solo cargar en la de carrito

//termina el loader de cargar

/* window.onload = function () {
  let $loader = document.getElementById('contenedor_carga');
  $loader.style.visibility = 'hidden';
  $loader.style.opacity = '0';
}  */ //oculta el loader cuando termina de cargarse la pagina