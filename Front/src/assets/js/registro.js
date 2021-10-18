const $comprador = document.querySelector('#comprador');
$comprador.checked = true;   //activa el radio de comprador, por defecto

const $vendedor = document.querySelector('#vendedor');
const $registrarUS = document.querySelector('#registrarUs');


const $user = document.querySelector('#user');
const $name = document.querySelector('#name');
const $email = document.querySelector('#email');
const $genFav = document.querySelector('#genFav');
const $fechaNacimiento = document.querySelector('#fechaNacimiento');
const $contraseña = document.querySelector('#contraseña');
const $cContraseña = document.querySelector('#cContraseña');
const $TyCA = document.querySelector('#TyCA');




$vendedor.addEventListener('click', () =>{
  if ($vendedor.checked) {
    document.location.href = './15-datos-vendedor.html';  //al clickear en vendedor, se valida q se clickea para activar lo lleva hacia los datos de vendedor, se tendria que llenar con lo que ya puso en los demas campos correspondientes
  }
});

$registrarUS.addEventListener('click', () =>{
  let inptsVal = 0
  if ($user.value) {
    inptsVal++;
    $user.classList.remove('inpRojo');
  } else {
    $user.classList.add('inpRojo'); 
  }
  if ($name.value) {
    inptsVal++;
    $name.classList.remove('inpRojo');
  } else {
    $name.classList.add('inpRojo'); 
  }
  if ($email.value) {
    inptsVal++;
    $email.classList.remove('inpRojo');
  } else {
    $email.classList.add('inpRojo'); 
  }
  if ($genFav.value) {
    inptsVal++;
    $genFav.classList.remove('inpRojo');
  } else {
    $genFav.classList.add('inpRojo'); 
  }
  if ($fechaNacimiento.value) {
    inptsVal++;
    $fechaNacimiento.classList.remove('inpRojo');
  } else {
    $fechaNacimiento.classList.add('inpRojo'); 
  }
  if ($contraseña.value) {
    inptsVal++;
    $contraseña.classList.remove('inpRojo');
  } else {
    $contraseña.classList.add('inpRojo'); 
  }
  if ($cContraseña.value && ($cContraseña.value == $contraseña.value)) {
    inptsVal++;
    $cContraseña.classList.remove('inpRojo');
  } else {
    $cContraseña.classList.add('inpRojo'); 
  }
  if ($comprador.checked) {
    inptsVal++;
    $comprador.classList.remove('inpRojo');
  } else {
    $comprador.classList.add('inpRojo'); 
  }
  if ($TyCA.checked) {
    inptsVal++;
    $TyCA.classList.remove('inpRojo');
  } else {
    $TyCA.classList.add('inpRojo'); 
  }
  if (inptsVal == 9) {
    console.log('Puedes registrar');
    document.location.href = "./09-userWindow.html";
  }

});