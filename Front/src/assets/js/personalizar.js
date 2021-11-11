//conectando elementos html con js

const $textExtra = document.querySelector('#textExtra'); // permite agregar campo de texto para personalizacion extra
const $addTextArea = document.querySelector('#addTextArea'); // lugar donde se insertará el textArea
const $catTamanio = document.querySelector('#catTamanio');
const $catMaterial = document.querySelector('#catMaterial');
const $catColor = document.querySelector('#catColor');
const $addCatTamanio = document.querySelector('#addCatTamanio');
const $addCatMaterial = document.querySelector('#addCatMaterial');
const $addCatColor = document.querySelector('#addCatColor');
const $guardarPerzonalizacion = document.querySelector('#guardarPerzonalizacion');
const $cancelarPerzonalizacion = document.querySelector('#cancelarPerzonalizacion');
const $modificarPerzonalizacion = document.querySelector('#modificarPerzonalizacion');
const $eliminarPerzonalizacion = document.querySelector('#eliminarPerzonalizacion');
// primero obtenemos el valor del data-id del producto y lo guardamos en el objeto junto con los demas datos
const dataIdProducto = localStorage.getItem("idProductoPersonalizable");

// Despliqgue de campos de opciones de personalización
// Opciones de tamaño
$catTamanio.addEventListener('change', () => {
    if($catTamanio.checked == true){
        $addCatTamanio.innerHTML = `
        <select name="" id="tamanio" class="uWborder uWinputSize">
            <option value="">TAMAÑOS</option>
            <option value="CHICO">CHICO</option>
            <option value="MEDIANO">MEDIANO</option>
            <option value="GRANDE">GRANDE</option>
        </select>`;
    }else{
        $addCatTamanio.innerHTML = "";
    }
})

// Opciones de material
$catMaterial.addEventListener('change', () => {
    if($catMaterial.checked == true){
        $addCatMaterial.innerHTML = `
        <select name="" id="material" class="uWborder uWinputSize">
            <option value="null">MATERIALES</option>
            <option value="METAL">METAL</option>
            <option value="MADERA">MADERA</option>
            <option value="PLASTICO">PLASTICO</option>
        </select>`;
    }else{
        $addCatMaterial.innerHTML = "";
    }
})

// Opciones de color
$catColor.addEventListener('change', () => {
    if($catColor.checked == true){
        $addCatColor.innerHTML = `
        <select name="" id="color" class="uWborder uWinputSize">
            <option value="null">COLORES</option>
            <option value="PLATA">PLATA</option>
            <option value="DORADO">DORADO</option>
            <option value="CAFE">CAFE</option>
        </select>`;
    }else{
        $addCatColor.innerHTML = "";
    }
})

// Agregando el campo de texto para personalizacion extra
$textExtra.addEventListener('change', () => {
    if($textExtra.checked == true){
        $addTextArea.innerHTML = `<textarea class="form-control uWborder" id="personalizacionExtra" rows="5" maxlength="250" placeholder="250 caracteres maximo"></textarea>`;
    }else{
        $addTextArea.innerHTML = "";
    }
})

// funcionamiento de los botones guardar, modificar, cancelar
$guardarPerzonalizacion.addEventListener('click', ()=>{
    agregarPersonalizacion();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Personalización agregada',
        showConfirmButton: false,
        timer: 1500
    })
    // delay agregado para ver el efecto de la alerta de personalización guardada
    let time = setTimeout(function(){
        window.location.href = "./10-carritoWindow.html";
    },1800);
})

$cancelarPerzonalizacion.addEventListener('click', ()=>{
    window.location.href = "./10-carritoWindow.html";
    localStorage.removeItem("idProductoPersonalizable");
})

const nombreExistente = "producto" + dataIdProducto;
if(localStorage.getItem(nombreExistente)){
    $modificarPerzonalizacion.disabled = false;
    $guardarPerzonalizacion.disabled = true;
    $eliminarPerzonalizacion.disabled = false;
    $modificarPerzonalizacion.addEventListener('click', ()=>{
        agregarPersonalizacion()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Personalización modificada',
            showConfirmButton: false,
            timer: 1500
        })
        let time = setTimeout(function(){
            window.location.href = "./10-carritoWindow.html";
        },1800);
    })

    $eliminarPerzonalizacion.addEventListener('click', ()=>{
        borrarPersonalizacion();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Personalización eliminada',
            showConfirmButton: false,
            timer: 1500
        })
        let time = setTimeout(function(){
            window.location.href = "./10-carritoWindow.html";
        },1800);
    })
}else{
    $modificarPerzonalizacion.disabled = true;
    $eliminarPerzonalizacion.disabled = true;
}

function borrarPersonalizacion(){
    const nombre = "producto" + dataIdProducto;
    localStorage.removeItem(nombre);
    localStorage.removeItem("idProductoPersonalizable");
}

// almacenar datos en objeto para mandarlo a carrito
function agregarPersonalizacion(){
    // obtenemos los valores de los elementos
    let valTamanio = "No especificado";
    let valMaterial = "No especificado";
    let valColor = "No especificado";
    let valExtra = "No especificado";
    if($catTamanio.checked == true){
        valTamanio = document.getElementById('tamanio').value;
    }
    if($catMaterial.checked == true){
        valMaterial = document.getElementById('material').value;
    }
    if($catColor.checked == true){
        valColor = document.getElementById('color').value;
    }
    if($textExtra.checked == true){
        valExtra = document.getElementById('personalizacionExtra').value;
    }

    const producto = {
        id: dataIdProducto,
        tamanio: valTamanio,
        material: valMaterial,
        color: valColor,
        extra: valExtra
    }

    // Creamos el identificador para el local storage
    const nombre = "producto" + dataIdProducto;
    localStorage.setItem(nombre, JSON.stringify(producto));
    localStorage.removeItem("idProductoPersonalizable");
}

//cancelación funcionamiento boton back navegador
window.location.hash="no-back-button";
window.location.hash="Again-No-back-button";//esta linea es necesaria para chrome
window.onhashchange=function(){window.location.hash="no-back-button";}