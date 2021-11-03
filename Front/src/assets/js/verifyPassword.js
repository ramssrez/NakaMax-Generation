// cancelar boton back navegador
window.location.hash="no-back-button";
window.location.hash="Again-No-back-button";//esta linea es necesaria para chrome
window.onhashchange=function(){window.location.hash="no-back-button";}

// Enlace HTML y JS
const $inputPassword = document.getElementById('Vpassword');
const $show = document.querySelector('#showPassword');
const $buttonVerify = document.querySelector('#nextStepPassword');
const $cancel = document.querySelector('#cancelVerify');

//recuperando valores de sessionStorage para saber tipo de edición por la cual se esta verificando, cambio de contraseña o de correo
let editField = sessionStorage.getItem('typeEditData');

//funcion para mostrar contraseña
$show.addEventListener('change', ()=>{
    if($inputPassword.type == "password"){
        $inputPassword.type = "text";
    }else{
        $inputPassword.type = "password";
    }
})

const prueba = 'carlos';
//funcion verificar contraseña
$buttonVerify.addEventListener('click', ()=>{
    const contraseña = $inputPassword.value;
    if(contraseña !== ""){
        if(contraseña === prueba){

            //dirigiendo a pantallas según el campo que se quiera editar: correo o contraseña
            if(editField === "NewPassword"){
                document.location.href = "./04-newPassword.html";
                sessionStorage.removeItem('typeEditData');
            }else{
                document.location.href = "./09-userWindow.html";
                sessionStorage.removeItem('typeEditData');
                sessionStorage.setItem("verify","verified");
            }

        }else{
            $inputPassword.value = "";
            Swal.fire({
                icon: 'error',
                title: 'Contraseña incorrecta',
            })
        }
    }else{
        Swal.fire({
            icon: 'info',
            title: 'Introduzca su contraseña',
        })
    }
})

//cancelar verificación
$cancel.addEventListener('click', ()=>{
    sessionStorage.removeItem('typeEditData');
    window.location.href = "./09-userWindow.html";
});