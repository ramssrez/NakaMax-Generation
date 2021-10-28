// cancelar boton back navegador
window.location.hash="no-back-button";
window.location.hash="Again-No-back-button";//esta linea es necesaria para chrome
window.onhashchange=function(){window.location.hash="no-back-button";}

//Enlace HTML y JS
const $newPassword = document.querySelector('#newPassword');
const $confirmPassword = document.querySelector('#confirmPassword');
const $savePassword =document.querySelector('#savePassword');
const $show2 = document.querySelector('#show2');
const $cancelNewPassword = document.querySelector('#cancelNewPassword');

//funcion mostrar contraseñas
$show2.addEventListener('change', ()=>{
    if($newPassword.type == "password"){
        $newPassword.type = "text";
        $confirmPassword.type = "text";
    }else{
        $newPassword.type = "password";
        $confirmPassword.type = "password";
    }
})

//funcion verificar igualdad de contraseñas
$savePassword.addEventListener('click', ()=>{
    const newPassword = $newPassword.value;
    if(newPassword !== ""){
        if(newPassword !== $confirmPassword.value){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden',
            })

            $newPassword.value = "";
            $confirmPassword.value = "";
        }else{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Nueva contraseña guardada',
                showConfirmButton: false,
                timer: 1500
            })

            // delay agregado para ver el efecto de la alerta de nueva contraseña guardada
            var timer = setTimeout(function(){
                document.location.href = ('./09-userWindow.html');
            },1800);
        } 
    }
    else{
        Swal.fire({
            icon: 'info',
            title: 'No has escrito la contraseña',
        })
    }
})

// cancelar nueva contraseña
$cancelNewPassword.addEventListener('click', ()=>{
    localStorage.setItem('cancel','cancel');
    window.location.href = "./09-userWindow.html";
})