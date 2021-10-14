const cart = document.getElementById("cart");
const productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#list-cart tbody");
const vaciarCartBoton = document.getElementById("vaciar-cart");

cargarEventListeners();
function cargarEventListeners() {
    productos.addEventListener("click", comprarProducto);
    cart.addEventListener("click", eliminarProducto);
    vaciarCartBoton.addEventListener("click", vaciarCart);
    document.addEventListener('DOMContentLoaded', leerLocalStorage)
}

function comprarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('addToCart')){
        const producto = e.target.parentElement.parentElement;
        leerProducto(producto);
    }
}

function leerProducto(producto){
    const infoProducto = {
        imagen: producto.querySelector('.item-imagen').src,
        titulo: producto.querySelector('.item-titulo').textContent,
        precio: producto.querySelector('.item-price').textContent,
        id: producto.querySelector('.button').getAttribute('data-id')
    }
    
    insertarCart(infoProducto);
}

function insertarCart(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src="${producto.imagen}" width=100> 
    </td> 
    <td>${producto.titulo}</td>
    <td>${producto.precio}</td>
    <td>
    <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
    </td>
    `;
    listaProductos.appendChild(row);
    saveProductoLocalStorage(producto);
}

function eliminarProducto(e) {
    e.preventDefault();
    
    let producto,
    productoId;
    
    if(e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        productoId = producto.querySelector('.button').getAttribute('data-id');
    }
    eliminarProductosLocalStorage(productoId)
}

function vaciarCart(){
    while(listaProductos.firstChild){
        listaProductos.removeChild(listaProductos.firstChild);
    }
    vacLocalStorage();
    
    return false;
}

function saveProductoLocalStorage(producto) {
    let productos;
    
    productos = obtenerProductoLocalStorage();
    productos.push(producto);
    
    localStorage.setItem('productos', JSON.stringify(productos));
}

function obtenerProductoLocalStorage() {
    let productosLS;
    
    if(localStorage.getItem('productos') === null) {
        productosLS = [];
    }else {
        productosLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productosLS;
}

function leerLocalStorage() {
    let productosLS;
    
    productosLS = obtenerProductoLocalStorage();
    
    productosLS.forEach(function(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
        <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
        </td>
        `;
        listaProductos.appendChild(row);
    });
}

function eliminarProductosLocalStorage(producto) {
    let productosLS;
    productosLS = obtenerProductoLocalStorage();
    
    productosLS.forEach(function(productosLS, index){
        if(productosLS.id === producto) {
            productosLS.splice(index, 1);
        }
    });
    
    localStorage.setItem('productos', JSON.stringify(productosLS));
}

function vacLocalStorage() {
    localStorage.clear();
}
