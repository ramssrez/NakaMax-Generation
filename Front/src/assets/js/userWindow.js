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
function disableBtn() {
    // document.getElementById(idElement).disabled = true;
    $uWbuttonEdit.disabled = true;
    $uWbuttonEditUser.disabled = true;
    $uWbuttonEditEmail.disabled = true;
    $uWbuttonEditPassword.disabled = true;
    $uWbuttonEditRegion.disabled = true;
}
function enableBtn() {
    // document.getElementById(idElement).disabled = false;
    $uWbuttonEdit.disabled = false;
    $uWbuttonEditUser.disabled = false;
    $uWbuttonEditEmail.disabled = false;
    $uWbuttonEditPassword.disabled = false;
    $uWbuttonEditRegion.disabled = false;
}

//variables
// variable para guardar tipo de accion en session storage
let action = "";

// Creación de boton general: guardar 
const btnGuardar = document.createElement('button');
btnGuardar.type = 'button';
btnGuardar.innerText = "Guardar";
btnGuardar.className = 'uWbtn btn m-2';

// Creación del boton general: cancelar
const btnCancel = document.createElement('button');
btnCancel.type = 'button';
btnCancel.innerText = "Cancelar";
btnCancel.className = 'uWbtn btn m-2';

// -------------- Edición del nombre -------------------
$uWbuttonEdit.addEventListener('click',()=>{
    var InputItem = document.createElement('input');
    InputItem.type = 'text';
    InputItem.placeholder = "Nombre";
    InputItem.className = 'uWborder uWinputSize mx-2';
    $inputName.appendChild(InputItem);
    $inputName.appendChild(btnGuardar);
    $inputName.appendChild(btnCancel);

    disableBtn();

    btnGuardar.addEventListener('click',() => {
        const inputValue = InputItem.value;
        $Name.textContent = inputValue; 
        removeItems();
    })

    btnCancel.addEventListener('click',()=>{
        removeItems();
    })

// funcion para remover los items para editar el campo del nombre 
    function removeItems(){
        enableBtn();
        $inputName.removeChild(InputItem);
        $inputName.removeChild(btnGuardar);
        $inputName.removeChild(btnCancel);
    }
})

// --------------- Edición del usuario -------------------
$uWbuttonEditUser.addEventListener('click',()=>{
    var InputItem = document.createElement('input');
    InputItem.type = 'text';
    InputItem.placeholder = "Nuevo usuario";
    InputItem.className = 'uWborder uWinputSize mx-2';
    $inputUser.appendChild(InputItem);
    $inputUser.appendChild(btnGuardar);
    $inputUser.appendChild(btnCancel);

    disableBtn();

    btnGuardar.addEventListener('click',() => {
        const inputValue = InputItem.value;
        $User.textContent = inputValue;
        removeItems();
    })

    btnCancel.addEventListener('click',()=>{
        removeItems();
    })

    function removeItems(){
        enableBtn();
        $inputUser.removeChild(InputItem);
        $inputUser.removeChild(btnGuardar);
        $inputUser.removeChild(btnCancel);
    }
})

//-------------------- Edición del correo --------------------

let EditEmail = sessionStorage.getItem('verify');
let newPasswordCancel;
var actualEmail;
$uWbuttonEditEmail.addEventListener('click',()=>{
    action = "NewEmail"
    sessionStorage.setItem("typeEditData",action);
    //window.location.href = "./03-verifyPassword.html";
    window.location.href = "./03-verifyPassword.html"
})

// obteniendo dato de sessionStorage para continuar con procedimiento de cambio de correo
if(EditEmail === "verified"){
    actualEmail = $Email.value;
    console.log(actualEmail);
    var InputItem = document.createElement('input');
    InputItem.type = 'email';
    InputItem.placeholder = "Correo";
    InputItem.className = 'uWborder uWinputSize mx-2';
    $inputEmail.appendChild(InputItem);
    $inputEmail.appendChild(btnGuardar);
    $inputEmail.appendChild(btnCancel);
    disableBtn();

    btnGuardar.addEventListener('click',() => {
        $Email.textContent = InputItem.value;
        //$Email.textContent = inputValue;
        sessionStorage.removeItem('verify');
        removeItems();
        window.location.href = "./04-newPassword.html"
    })

    btnCancel.addEventListener('click',()=>{
        removeItems();
    })

    function removeItems(){
        enableBtn();
        $inputEmail.removeChild(InputItem);
        $inputEmail.removeChild(btnGuardar);
        $inputEmail.removeChild(btnCancel);
    }
}else{
    EditEmail = "";
}
newPasswordCancel = localStorage.getItem('cancel');
if(newPasswordCancel === 'cancel')
{
    console.log(actualEmail);
    $Email.textContent = actualEmail;
    localStorage.removeItem('cancel');
    actualEmail = "";
}

// Edición de la contraseña. Envia a la página correspondiente para la edicion: 03-verifyPassword
$uWbuttonEditPassword.addEventListener('click',()=>{
    action = "NewPassword"
    sessionStorage.setItem("typeEditData",action);
    window.location.href = "./03-verifyPassword.html";
})

//Edición de la region. Seleccion de una lista.
$uWbuttonEditRegion.addEventListener('click',()=>{
    const desplegable = document.createElement('div');
    desplegable.innerHTML = `
    <select name="" id="regiones" class="uWborder uWinputSize mx-2 p-2">
      <option value="">PAÍS</option>
      <option value="MÉXICO">MÉXICO</option>
      <option value="EUA">EUA</option>
      <option value="CANADÁ">CANADA</option>
      <option value="CHINA">CHINA</option>
    </select>`
    $inputRegion.appendChild(desplegable);
    disableBtn();

    const $seleccionPais = document.querySelector('#regiones');

    $seleccionPais.addEventListener('change', (e) => {
        let regionSeleccionada = e.target.value;
        $Region.textContent = regionSeleccionada;
        enableBtn();
        $inputRegion.removeChild(desplegable);
    })
})

//agregando boton dar de alta producto si es vendedor
const agregarProducto = document.querySelector('#agregarProducto');

// Creación de boton general: agregar producto 
const btnAgregar = document.createElement('button');
btnAgregar.type = 'button';
btnAgregar.innerText = "AGREGAR PRODUCTO";
btnAgregar.className = 'uWbtn btn m-2';

const esvendedor = true;
if(esvendedor){
    agregarProducto.appendChild(btnAgregar);
}

btnAgregar.addEventListener('click',()=>{
    window.location.href = "./12-altaProducto.html";
})