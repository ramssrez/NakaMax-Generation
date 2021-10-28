const compra = new Carrito();
const listaCompra = document.querySelector('#list-carrito tbody');

cargarEventListeners();

function cargarEventListeners(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
}