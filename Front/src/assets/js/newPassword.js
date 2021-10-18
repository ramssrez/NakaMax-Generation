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
            alert('La contraseñas no son iguales');
            $newPassword.value = "";
            $confirmPassword.value = "";
        }else{
            alert('nueva contraseña guardada');
            document.location.href = ('./09-userWindow.html');
        } 
    }
    else{
        alert("la contraseña no se ha escrito");
    }
})

// cancelar nueva contraseña
$cancelNewPassword.addEventListener('click', ()=>{
    window.location.href = "./09-userWindow.html";
})

// cancelar boton back navegador
// window.location.hash="no-back-button";
// window.location.hash="Again-No-back-button";//esta linea es necesaria para chrome
// window.onhashchange=function(){window.location.hash="no-back-button";}