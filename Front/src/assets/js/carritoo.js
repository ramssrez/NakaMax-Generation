// Variables
const carrito = document.querySelector('#cart');
const contenerdorCarrito = document.querySelector('#list-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCards = document.querySelector('#lista-productos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // Cuando agregas un producto presionando "Agregar al Carrito".
    listaCards.addEventListener('click', agregarProducto);

    // Elimina productos del carrito.
    carrito.addEventListener('click', eliminarProducto);

    // Muestra los cursos de Local Storage.
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });

    // Vaciar el carrito.
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // reseteamos el arreglo.

        limmpiarHTML(); // Eliminamos todo el HTML del carrito.
    });
}

// Funciones
function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

// Eliminar producto del carrito.
function eliminarProducto(e) {
    //console.log(e.target.classList);
    if (e.target.classList.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id.
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML.
    }
}

//Lee el contenido HTML al que le damos click en agregar carrito
function leerDatosProducto(producto) {
    //console.log(producto)

    //Crear un objeto con el contenido del producto
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('h5').textContent,
        id: producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }
    //console.log(infoProducto);

    //Revisa si un elemento ya existe en el carrito.
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if (existe) {
        // Actualizamos la cantidad.
        const productos = articulosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
                return producto; // retorna el objeto actualizado,
            } else {
                return producto; // retorna los objetos que no son duplicados.
            }
        });
        articulosCarrito = [...productos];
    } else {
        // Agrega elementos al arreglo de carrito.
        articulosCarrito = [...articulosCarrito, infoProducto];
    }


  //  console.log(articulosCarrito);

    carritoHTML();
}

// Muestra el carrito de compras en el HTML.
function carritoHTML() {

    // Limpiar HTML
    limmpiarHTML();

    // Recorre el carrito y genera el HTML.
    articulosCarrito.forEach(producto => {
        const { imagen, titulo, precio, cantidad, id } = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        <img src="${imagen}" width="100">
        </td>
        <td>&nbsp &nbsp${titulo}</td>
        <td>&nbsp &nbsp${precio}</td>
        <td>&nbsp &nbsp${cantidad}</td>
        <td>
        <a href="#" class="borrar-producto" data-id="${id}"> X </a>
        </td> 
        `;
        /*
        */

        // Agrega el html del carrito en el body.
        contenerdorCarrito.appendChild(row);
    });

    //Agregar el carrito de compras al storage.
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los productos del tbody.
function limmpiarHTML() {
    // Forma lenta.
    //contenerdorCarrito.innerHTML = '';

    //Forma rapida.
    while (contenerdorCarrito.firstChild) {
        contenerdorCarrito.removeChild(contenerdorCarrito.firstChild);
    }
    localStorage.clear();
}
