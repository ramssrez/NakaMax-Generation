/*const compra = new Carrito();
const listaCompra = document.querySelector('#list-carrito tbody');

cargarEventListeners();

function cargarEventListeners(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
}*/

// variables para crear todas las cards
let $cartas = document.querySelector('#cartas');
let carta = "";
let esPersonalizable;

// arreglo que simula los datos de que producto es personalizable y que producto no lo es
let ides = ["true", "false", "true"];

// variables y elementos para el boton personalizar
const $btnsPersonalizar = document.querySelector('#btnsPersonalizar');

// ciclo para agregar todas los productos agregados al carrito
// reemplazar por un foreach
for(let i = 0; i<3 ; i++){
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(resp => resp.json())
    .then(data => {
    let albumID = data[i].albumID;
    let url = data[i].url;
    let title = data[i].title;
    creaCartas(i, url, title);
    // en esta seccion guardamos los booleanos de si es personalizable o no dentro de un arreglo
    });
};

// html estructura de las cards de productos de carrito
const creaCartas = (i, url, title) => {
  carta = carta + `
  <span class="precio numero item-precio">${i}</span>

<!-- Producto -->
<div class="row p-2">

    <!-- Imagen del producto -->
    <div class="col-xl-6 col-sm-12 carritoItems">
        <img src="${url}" alt="" class="imagen-producto item-imagen img-10carrito img-fluid">
    </div>

    <!-- Descripcion de la compra -->
    <div class="col-xl-6 col-sm-12" id="seccionPersonalizable">
        <p class="nombre-producto">${title}</p>
        <p><input type="number" placeholder="CANTIDAD" class="inp-cantidad"> </p>
        <button class="btn-eliminar all-btn personalizar-producto" data-id='${i}'>PERSONALIZAR</button>
        <button class="btn-eliminar all-btn">ELIMINAR</button>
    </div>

    <div class="datosPersonalizacion"></div>
</div>

<div class="subtotales">
    <p class=" subtotal">subtotal (<span class="cantidad">1</span> producto): <span
            class="precio_total compraTotal">$1650.00</span></p>
</div>
<hr class="separador">
  `;
  $cartas.innerHTML = carta;
};

// logica para ver si es personalizable
escucharBtnPersonalizar();

// escuchamos el evento comun de los botones
function escucharBtnPersonalizar (){
    // para cuando se presiona el boton personalizar de alguna de las cards
    $btnsPersonalizar.addEventListener('click', btnIrApersonalizar);
}
function btnIrApersonalizar(e) {
    e.preventDefault();
    if (e.target.classList.contains('personalizar-producto')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

function leerDatosProducto (producto){
    let iDProducto = parseInt(producto.querySelector('button').getAttribute('data-id'));
    // preguntar si ya fue personalizado
    // variables para almacenar datos de los ciclos

    for(let i = 0; i<ides.length; i++){
        if(i == iDProducto){
            esPersonalizable = ides[i];
            console.log(esPersonalizable);
        }
    }

    console.log(esPersonalizable);
    if(esPersonalizable == true){
        document.location.href = ('./16-personalizar.html');
    }else{
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Este producto no es personalizable',
            showConfirmButton: false,
            timer: 1500
        })
        esPersonalizable = "";
    } 
}

// Funcion agregar el boton personalizar si el producto es personalizable

function datosPersonalizacion(){
    //obtenemos los datos
    const materialProducto = 'metal';
    const tamañoProducto = 'mediano';
    const colorProducto = 'dorado';
    const personalizacionExtra = 'Este es el texto que escribio el comprador';

    // mostrando datos de personalización
    datos = document.createElement('div');
    datos.innerHTML = `
        <br>
        <h6><strong>Personalización agregada : </strong></h6> 
        <p><strong>Material:</strong> ${materialProducto}</p>
        <p><strong>Tamaño:</strong> ${tamañoProducto}</p>
        <p><strong>Color:</strong> ${colorProducto}</p>
        <p><strong>Personalizacion extra:</strong> ${personalizacionExtra}</p>`;
    $datosP.appendChild(datos);  
}


// estructura html base de las cartas
/*
<div>
<span class="precio numero item-precio">$1,650.99</span>
<div class="row p-2">

    <!-- Imagen del producto -->
    <div class="col-xl-6 col-sm-12 carritoItems">
        <img src="src/assets/images/imagen-producto.png" alt="" class="imagen-producto item-imagen img-10carrito">
    </div>

    <!-- Descripcion de la compra -->
    <div class="col-xl-6 col-sm-12" id="seccionPersonalizable">
        <p class="nombre-producto">Shusui Sword Roronoa Zoro - One piece</p>
        <p><input type="number" placeholder="CANTIDAD" class="inp-cantidad"> </p>
        <button class="btn-eliminar all-btn" class="btnPersonalizar">PERSONALIZAR</button>
        <button class="btn-eliminar all-btn">ELIMINAR</button>
        <div class="datosP"></div>
    </div>
</div>

<div class="subtotales">
    <p class=" subtotal">subtotal (<span class="cantidad">1</span> producto): <span
            class="precio_total compraTotal">$1650.00</span></p>
</div>
<hr class="separador">
</div>*/