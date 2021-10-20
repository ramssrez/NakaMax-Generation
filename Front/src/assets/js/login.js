import Swal from 'sweetalert2';
const $email = document.querySelector("#inputEmailLogin");
const $password = document.querySelector("#inputPasswordLogin");
const $btnLogin = document.querySelector("#btnLogin");

$btnLogin.addEventListener('click', () =>{
    if(($email.value === "" && $password.value === "")){
      console.log("Esto esta vacio");
      alert("Los campos están vacios")
    }else{
      console.log("Los campos estan llenos");
    }
  });
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  });