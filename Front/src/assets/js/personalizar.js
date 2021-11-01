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
            <option value="">MATERIALES</option>
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
            <option value="">COLORES</option>
            <option value="PLATA">METAL</option>
            <option value="DORADO">MADERA</option>
            <option value="CAFE">PLASTICO</option>
        </select>`;
    }else{
        $addCatColor.innerHTML = "";
    }
})

// Agregando el campo de texto para personalizacion extra
$textExtra.addEventListener('change', () => {
    if($textExtra.checked == true){
        $addTextArea.innerHTML = `<textarea class="form-control uWborder" id="exampleFormControlTextarea1" rows="5" maxlength="250" placeholder="250 caracteres maximo"></textarea>`;
    }else{
        $addTextArea.innerHTML = "";
    }
})

// funcionamiento de los botones guardar, modificar, cancelar
$guardarPerzonalizacion.addEventListener('click', ()=>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Personalización agregada',
        showConfirmButton: false,
        timer: 1500
    })
    // delay agregado para ver el efecto de la alerta de personalización guardada
    let time = setTimeout(function(){
        window.location.href = "/Front/10-carritoWindow.html";
    },1800);
})

$cancelarPerzonalizacion.addEventListener('click', ()=>{
    window.location.href = "/Front/10-carritoWindow.html";
})

const personalizado = true;
if(personalizado == true){
    $modificarPerzonalizacion.disabled = false;
    $modificarPerzonalizacion.addEventListener('click', ()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Personalización modificada',
            showConfirmButton: false,
            timer: 1500
        })
        let time = setTimeout(function(){
            window.location.href = "/Front/10-carritoWindow.html";
        },1800);
    })
}else{
    $modificarPerzonalizacion.disabled = true;
}

//cancelación funcionamiento boton back navegador
window.location.hash="no-back-button";
window.location.hash="Again-No-back-button";//esta linea es necesaria para chrome
window.onhashchange=function(){window.location.hash="no-back-button";}