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

// País
const $uWbuttonEditRegion = document.querySelector('#uWeditRegion');
const $inputRegion = document.getElementById('divRegion');
const $Region = document.querySelector('#region');

// funciones para activar y desactivar botones de editar
function disableBtn(idElement) {
    document.getElementById(idElement).disabled = true;
}
function enableBtn(idElement) {
    document.getElementById(idElement).disabled = false;
}

// Creación de boton general: guardar 
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

// Edición de la contraseña. Envia a la página correspondiente para la edicion: 03-verifyPassword
$uWbuttonEditPassword.addEventListener('click',()=>{
    window.location.href = "/Front/03-verifyPassword.html";
})

// Edición de la region. Seleccion de una lista.
$uWbuttonEditRegion.addEventListener('click',()=>{
    const desplegable = document.createElement('div');
    desplegable.innerHTML = `
    <select name="" id="regiones" class="uWborder uWinputSize mx-2 p-2">
      <option value="">PAÍS</option>
      <option value="MÉXICO">MÉXICO</option>
      <option value="EUA">EUA</option>
      <option value="CANADA">CANADA</option>
      <option value="CHINA">CHINA</option>
    </select>`
    $inputRegion.appendChild(desplegable);
    disableBtn("uWeditRegion");

    const $seleccionPais = document.querySelector('#regiones');

    $seleccionPais.addEventListener('change', (e) => {
        let regionSeleccionada = e.target.value;
        $Region.textContent = regionSeleccionada;
        enableBtn("uWeditRegion");
        $inputRegion.removeChild(desplegable);
    })
})