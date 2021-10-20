import Swal from 'sweetalert2';
const $email = document.querySelector("#inputEmailLogin");
const $password = document.querySelector("#inputPasswordLogin");
const $btnLogin = document.querySelector("#btnLogin");

$btnLogin.addEventListener('click', () =>{
    if(($email.value === "" && $password.value === "")){
      errorVacios();
    }else{
      console.log("Los campos estan llenos");
    }
  });
  
  function errorVacios(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Los campos están vacios'
    });
  }

