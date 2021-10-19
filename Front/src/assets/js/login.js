const $email = document.querySelector("#inputEmailLogin");
const $password = document.querySelector("#inputPasswordLogin");
const $btnLogin = document.querySelector("#btnLogin");

$btnLogin.addEventListener('click', () =>{
    if(($email.value === "" && $email.value === "")){
      console.log("Esto esta vacio");
    }else{
      console.log("Esto no esta vacio");
    }
  });

  