/*const compra = new Carrito();
const listaCompra = document.querySelector('#list-carrito tbody');

cargarEventListeners();

function cargarEventListeners(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
}*/

// variables para crear todas las cards
let $cartas = document.querySelector('#cartas');
let carta = "";
// arreglo que simula los datos de que producto es personalizable y que producto no lo es
let ides = ["1", "0", "1","1"];
// variables y elementos para el boton personalizar
const $btnsPersonalizar = document.querySelector('#btnsPersonalizar');
//let productosPersonalizados = null;

const cantidad = 4
mostrarProductos(); // Inserion de productos 
escucharBtnPersonalizar(); // verifica que productos es personalizable
//escucharBtnBorrarP();

// ciclo para agregar todas los productos agregados al carrito
function mostrarProductos(){
    for(let i = 0; i<cantidad ; i++){
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then(resp => resp.json())
        .then(data => {
        let albumID = data[i].albumID;
        let url = data[i].url;
        let title = data[i].title;
        creaCartas(i, url, title);
        let time = setTimeout(function(){
            agregarPersonalizacion(i);
        },1000);
        });
    };
}

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
    <div class="col-xl-6 col-sm-12">
        <p class="nombre-producto">${title}</p>
        <p><input type="number" placeholder="CANTIDAD" class="inp-cantidad"> </p>
        <button class="btn-eliminar all-btn personalizar-producto" data-id='${i}'>PERSONALIZAR</button>
        <button class="btn-eliminar all-btn">ELIMINAR</button>
        <div id="datosP${i}"></div>
    </div>
</div>

<div class="subtotales">
    <p class=" subtotal">subtotal (<span class="cantidad">1</span> producto): <span
            class="precio_total compraTotal">$1650.00</span></p>
</div>
<hr class="separador">
  `;
  $cartas.innerHTML = carta;
};

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
    let esPersonalizable;

    for(let i = 0; i<ides.length; i++){
        if(i == iDProducto){
            esPersonalizable = parseInt(ides[i]);
        }
    }

    if(esPersonalizable == 1){
        localStorage.setItem("idProductoPersonalizable", iDProducto);
        esPersonalizable = 0;
        document.location.href = ('./16-personalizar.html');
    }else{
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Este producto no es personalizable',
            showConfirmButton: false,
            timer: 1500
        })
        esPersonalizable = 0;
    } 
    
}

function agregarPersonalizacion(contador){

    // buscamos si existe objeto de personalizacion en local storage
    const nombre = "producto" + contador.toString();
    if(localStorage.getItem(nombre)){
        const personalizacion = JSON.parse(localStorage.getItem(nombre));
        let idProducto = personalizacion.id;
        let tamañoProducto = personalizacion.tamanio;
        let materialProducto = personalizacion.material;
        let colorProducto = personalizacion.color;
        let extraProducto = personalizacion.extra;

        let idname = "datosP"+idProducto;
        const $datosP = document.getElementById(idname);
        $datosP.innerHTML = `<br>
            <h6><strong>Personalización agregada : </strong></h6> 
            <p><strong>Material:</strong> ${materialProducto}</p>
            <p><strong>Tamaño:</strong> ${tamañoProducto}</p>
            <p><strong>Color:</strong> ${colorProducto}</p>
            <p><strong>Personalización extra:</strong> ${extraProducto}</p>
        `;
    }
}