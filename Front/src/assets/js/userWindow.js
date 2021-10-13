// Enlaces HTML y JS
// Nombre de pila del usuario
const $uWbuttonEdit = document.querySelector('#uWeditName');
const $inputName = document.getElementById('divName');
const $Name = document.querySelector('#Name');

// Nombre de usuario
const $uWbuttonEditUser = document.querySelector('#uWeditUser');
const $inputUser = document.getElementById('divUser');
const $User = document.querySelector('#userName');

// Correo 
const $uWbuttonEditEmail = document.querySelector('#uWeditEmail');
const $inputEmail = document.getElementById('divEmail');
const $Email = document.querySelector('#email');

// Contraseña
const $uWbuttonEditPassword = document.querySelector('#uWeditPassword');
const $inputPassword = document.getElementById('divPassword');
const $Password = document.querySelector('#password');

// funciones para activar y desactivar boton editar
function disableBtn(idElement) {
    document.getElementById(idElement).disabled = true;
}
function enableBtn(idElement) {
    document.getElementById(idElement).disabled = false;
}

// Creación de boton guardar
const btnGuardar = document.createElement('button');
btnGuardar.type = 'button';
btnGuardar.innerText = "Guardar";
btnGuardar.className = 'uWbtn btn m-2';

// Edición del nombre
$uWbuttonEdit.addEventListener('click',()=>{
    var InputItem = document.createElement('input');
    InputItem.type = 'text';
    InputItem.placeholder = "Nombre";
    InputItem.className = 'uWborder uWinputSize mx-2';
    $inputName.appendChild(InputItem);
    $inputName.appendChild(btnGuardar);

    disableBtn("uWeditName");

    btnGuardar.addEventListener('click',() => {
        enableBtn("uWeditName");
        const inputValue = InputItem.value;
        $Name.textContent = inputValue;
        $inputName.removeChild(InputItem);
        $inputName.removeChild(btnGuardar);
    })
})

// Edición del usuario
$uWbuttonEditUser.addEventListener('click',()=>{
    var InputItem = document.createElement('input');
    InputItem.type = 'text';
    InputItem.placeholder = "Nuevo usuario";
    InputItem.className = 'uWborder uWinputSize mx-2';
    $inputUser.appendChild(InputItem);
    $inputUser.appendChild(btnGuardar);

    disableBtn("uWeditUser");

    btnGuardar.addEventListener('click',() => {
        enableBtn("uWeditUser");
        const inputValue = InputItem.value;
        $User.textContent = inputValue;
        $inputUser.removeChild(InputItem);
        $inputUser.removeChild(btnGuardar);
    })
})

// Edición del correo
$uWbuttonEditEmail.addEventListener('click',()=>{
    var InputItem = document.createElement('input');
    InputItem.type = 'email';
    InputItem.placeholder = "Correo";
    InputItem.className = 'uWborder uWinputSize mx-2';
    $inputEmail.appendChild(InputItem);
    $inputEmail.appendChild(btnGuardar);

    disableBtn("uWeditEmail");

    btnGuardar.addEventListener('click',() => {
        enableBtn("uWeditEmail");
        const inputValue = InputItem.value;
        $Email.textContent = inputValue;
        $inputEmail.removeChild(InputItem);
        $inputEmail.removeChild(btnGuardar);
    })
})

// Edición de la contraseña
$uWbuttonEditPassword.addEventListener('click',()=>{
    const createDivPassword = document.createElement('div');
    let contra = `
    <div class="input-group mb-3">
        <input id="pass" type="password" class="form-control" placeholder="Nueva contraseña">
        <div class="input-group-append">
            <button id="eyeBtn" class="btn btn-outline-secondary" type="button">
            <img src="./src/assets/images/ver.png" alt="Ojo" style="width: 20px;">
            </button>
        </div>
    </div>`;
    createDivPassword.innerHTML = contra;
    $inputPassword.appendChild(createDivPassword);
    $inputPassword.appendChild(btnGuardar);

    disableBtn("uWeditPassword");

    btnGuardar.addEventListener('click',() => {
        enableBtn("uWeditPassword");
        const inputValue = document.querySelector("#pass").value;
        $Password.textContent = inputValue;
        $inputPassword.removeChild(createDivPassword);
        $inputPassword.removeChild(btnGuardar);
    })
})

const $botonEye = document.getElementById("eyeBtn");
$botonEye.addEventListener('click',()=>{
    alert("hola");
})