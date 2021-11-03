// Elementos para la seccion de personalización de producto
const $listaProdutos = document.querySelector('#ListaProdutos');

const $seccionPersonalizable = document.querySelector('#seccionPersonalizable');
const $btnPersonalizar = document.querySelector('#btnPersonalizar');
const $datosP = document.querySelector("#datosP");

let esPersonalizable;
let fuePersonalizado;
let datos;

/*const compra = new Carrito();
const listaCompra = document.querySelector('#list-carrito tbody');

cargarEventListeners();

function cargarEventListeners(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
}*/

// ---------------- Agregando card de productos --------------------------------------

let cardProducto = "";
cardProducto = `
<span class="precio numero item-precio">$1,650.99</span>

<!-- Producto -->
<div class="row p-2">

    <!-- Imagen del producto -->
    <div class="col-xl-6 col-sm-12 carritoItems">
        <img src="src/assets/images/imagen-producto.png" alt="" class="imagen-producto item-imagen img-10carrito">
    </div>

    <!-- Descripcion de la compra -->
    <div class="col-xl-6 col-sm-12" id="seccionPersonalizable">
        <p class="nombre-producto">Shusui Sword Roronoa Zoro - One piece</p>
        <p><input type="number" placeholder="CANTIDAD" class="inp-cantidad"> </p>
        <button class="btn-eliminar all-btn" id="btnPersonalizar">PERSONALIZAR</button>
        <button class="btn-eliminar all-btn">ELIMINAR</button>
        <div class="datosP"></div>
    </div>

    <div id="datosPersonalizacion"></div>
</div>

<div class="subtotales">
    <p class=" subtotal">subtotal (<span class="cantidad">1</span> producto): <span
            class="precio_total compraTotal">$1650.00</span></p>
</div>
<hr class="separador">`
$listaProdutos.innerHTML = cardProducto;

// ---------------- funciones para producto personalizable ---------------------------


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

// preguntar si ya fue personalizado

fuePersonalizado = true;
esPersonalizable = false;

if(fuePersonalizado == true){
    datosPersonalizacion();
    $btnPersonalizar.addEventListener('click', ()=>{
        if(esPersonalizable == true){
            var timer = setTimeout(function(){
                document.location.href = ('./16-personalizar.html');
            },1800);
        }else{
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Este producto no es personalizable',
                showConfirmButton: false,
                timer: 1500
            })
        }   
    })
}