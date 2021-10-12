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

    disableBtn();

    btnGuardar.addEventListener('click',() => {
        enableBtn();
        const inputNameValue = InputItem.value;
        $Name.textContent = inputNameValue;
        $inputName.removeChild(InputItem);
        $inputName.removeChild(btnGuardar);
    })
})

function disableBtn() {
    document.getElementById("uWeditName").disabled = true;
}

function enableBtn() {
    document.getElementById("uWeditName").disabled = false;
}