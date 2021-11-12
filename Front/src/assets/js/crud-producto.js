// document.getElementById('file').onchange=function(e){
//     let reader=new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload=function(){
//         let preview=document.getElementById('preview');
//         let image=document.createElement('img');
//             image.src=reader.result;
//             image.style.width="200px";
//             preview.innerHTML='';
//             preview.append(image);
//     }
// }
const $agregarProducto = document.querySelector('#agregarProducto');

$agregarProducto.addEventListener('click',()=>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
    })

    // delay agregado para ver el efecto de la alerta de nueva contraseña guardada
    var timer = setTimeout(function(){
        //document.location.href = ('./09-userWindow.html');
        window.location.href = "./09-userWindow.html";
    },1800);
})