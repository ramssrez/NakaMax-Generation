document.getElementById('file').onchange=function(e){
    let reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=function(){
        let preview=document.getElementById('preview');
        let image=document.createElement('img');
            image.src=reader.result;
            image.style.width="200px";
            preview.innerHTML='';
            preview.append(image);
    }
}