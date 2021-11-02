// Elementos para la seccion de personalización de producto
const $seccionPersonalizable = document.querySelector('#seccionPersonalizable');
const $datosP = document.querySelector('#datosP');
let esPersonalizable;
let fuePersonalizado;
let fueDespersonalizado;

/*const compra = new Carrito();
const listaCompra = document.querySelector('#list-carrito tbody');

cargarEventListeners();

function cargarEventListeners(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
}*/



// ---------------- funciones para producto personalizable ---------------------------

// Preguntamos si es personalizable
isPersonalizable();
if(esPersonalizable == true){
    // Preguntamos si ha sido personalizado
    isFuePersonalizado();
    if(fuePersonalizado == false){
        //agregamos el boton
        irApersonalizar();
    }else{
        //agregamos la descripcion pero antes
        // preguntamos si fue despersonalizado
        fuePersonalizado();
        if(fueDespersonalizado == false){
            // Agregamos la info 
            datosPersonalizacion();
        }else{
            // borramos los compos

        }

    }
}

// Funcion agregar el boton personalizar si el producto es personalizable
function isPersonalizable (){
    // verificamos si el producto es personalizable, guardamos en variable el valor traido desde la Base de datos
    esPersonalizable = true;
}

// Funcion para saber si fue personalizado el producto
function isFuePersonalizado (){
    // Obtenemos los datos del backend
    fuePersonalizado = false;
}

function irApersonalizar(){
    //creamos el boton para llevarlo al apartado de personalizacion
    const btnPersonalizar = document.createElement('button');
    btnPersonalizar.type = 'button';
    btnPersonalizar.innerText = "Personalizar";
    btnPersonalizar.className = 'btn-eliminar all-btn';

    $seccionPersonalizable.appendChild(btnPersonalizar); 

    // Funcion para mandar a la seccion de personalizar
    btnPersonalizar.addEventListener('click', () => {
        window.location.href = "./16-personalizar.html";
    })
}

function fueDespersonalizado(){
    // obtenemos el dato
    fuePersonalizado = false;
}

function datosPersonalizacion(){
    //obtenemos los datos
    const materialProducto = 'metal';
    const tamañoProducto = 'mediano';
    const colorProducto = 'dorado';
    const personalizacionExtra = 'Este es el texto que escribio el comprador';

    // mostrando datos de personalización
    const datos = document.createElement('div');
    datos.innerHTML = `
        <p>Material: ${materialProducto}</p>
        <br>
        <p>Tamaño: ${tamañoProducto}</p>
        <br>
        <p>Color: ${colorProducto}</p>
        <br>
        <p>Personalizacion extra: ${personalizacionExtra}</p>`;
    $datosP.appendChild(datos);  
}