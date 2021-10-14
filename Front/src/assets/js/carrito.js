const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});
const carritoItemsContenedor = document.querySelector('#carritoItemsContenedor');

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.card');

    const itemImagen = item.querySelector('.item-imagen').src;
    const itemTitulo = item.querySelector('.item-titulo').textContent;
    const itemPrecio = item.querySelector('.item-price').textContent;
    const itemText = item.querySelector('.c-text').textContent;

    addItemAlCarrito(itemTitulo, itemPrecio, itemImagen);
    console.log(itemImagen,itemTitulo, itemPrecio, itemText)
}

function addItemAlCarrito(itemTitulo, itemPrecio, itemImagen) {
    const carritoCompraRow = document.createElement('div');
    const carritoContenido = `
    <div class="col-xl-8 col-sm-12 ">
    <h2 class="m-3">Carrito de Compras</h2>
    <span class="precio texto">PRECIO</span>
    <hr class="separador">
    <span class="precio numero">${itemPrecio}</span>

    <!-- Producto -->
    <div class="row p-2 carritoItemsContenedor">

        <!-- Imagen del producto -->
        <div class="col-xl-6 col-sm-12 carritoItems">
            <img src=${itemImagen} alt="" class="imagen-producto item-imagen">
        </div>

        <!-- Descripcion de la compra -->
        <div class="col-xl-6 col-sm-12">
            <p class="nombre-producto item-titulo">${itemTitulo}</p>
            <p><input type="number" placeholder="CANTIDAD" class="inp-cantidad"></p>
            <button class="btn-eliminar all-btn">ELIMINAR</button>
        </div>
    </div>

    <div class="subtotales">
        <p class=" subtotal">subtotal (<span class="cantidad">1</span> producto): <span
                class="precio_total">${itemPrecio}</span></p>
    </div>
    <hr class="separador">

</div>
<div class="col-xl-4 col-sm-12 text-center">
                <h2 class="mt-5 mb-5">Compra</h2>

                <p>Cantidad de Productos<span class="cantidad">1</span></p>
                <p>Subtotal: <span class="subtotal carritoItemPrecio">$1,650.99</span></p>
                <p>Costo de Envio <span class="costo-envio">$150.00</span></p>
                <hr class="separador">
                <p>Total <span class="total compraTotal">${itemPrecio}</span></p>

                <p><button class="btn-pago all-btn">PROCEDER PAGO</button></p>
                <p><button class="btn-productos all-btn">VER MAS PRODUCTOS</button></p>
            </div>
`;
carritoCompraRow.innerHTML = carritoContenido;
//carritoItemsContenedor.appendChild(carritoCompraRow);

actualizarCompraTotal();
}

function actualizarCompraTotal(){
    let total = 0;
    const compraTotal = document.querySelector('.compraTotal');
    const carritoItem = document.querySelectorAll('.carritoItems');

    carritoItem.forEach(carritoItem =>{
      const carritoItemPrecioelemento = carritoItem.querySelector('.carritoItemPrecio')
      console.log(carritoItemPrecioelemento)
    })
}