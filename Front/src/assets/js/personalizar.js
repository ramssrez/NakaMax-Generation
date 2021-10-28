//conectando elementos html con js

//pendiente
// const $catTamaño = document.querySelector('catTamaño');
// const $catMaterial = document.querySelector('catMaterial');
// const $catColor = document.querySelector('catColor');
// const $masCategorias = document.querySelector('#masCategorias');

const $textExtra = document.querySelector('#textExtra'); // permite agregar campo de texto para personalizacion extra
const $addTextArea = document.querySelector('#addTextArea'); // lugar donde se insertará el textArea
const $guardarPerzonalizacion = document.querySelector('#guardarPerzonalizacion');

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
    window.location.href = "/Front/10-carritoWindow.html";
})