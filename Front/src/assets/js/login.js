const $email = document.querySelector("#inputEmailLogin");
const $password = document.querySelector("#inputPasswordLogin");
const $btnLogin = document.querySelector("#btnLogin");

$btnLogin.addEventListener('click', () => {
  if (($email.value === "" && $password.value === "")) {
    errorVacios();
  } else {
    succesful()
  }
});

function errorVacios() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Los campos están vacios'
  });
}

function succesful() {
  Swal.fire({
    icon: 'success',
    title: 'Has iniciado sesión',
    showConfirmButton: false,
    timer: 1500
  });
  document.location.href = "./09-userWindow.html";
}

