// alert("archivo enlazado");
const $uWbuttonEdit = document.querySelector('#uWeditName');
const $inputName = document.getElementById('divName');
const $Name = document.querySelector('#userName');

$uWbuttonEdit.addEventListener('click',()=>{
    const btnGuardar = document.createElement('button');
    btnGuardar.type = 'button';
    btnGuardar.innerText = "Guardar";
    var InputItem = document.createElement('input');
    InputItem.type = 'text';
    $inputName.appendChild(InputItem);
    $inputName.appendChild(btnGuardar);

    $uWbuttonEdit.disabled = "true";

    btnGuardar.addEventListener('click',() => {
        $uWbuttonEdit.disabled = "false";
        const inputNameValue = InputItem.value;
        $Name.textContent = inputNameValue;
        $inputName.removeChild(InputItem);
        $inputName.removeChild(btnGuardar);
    })
})