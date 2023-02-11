const botonCarrito = document.querySelector('#agregar-carrito');

botonCarrito.addEventListener('click', agregarAlCarrito);

let carrito = [];

function agregarAlCarrito() {
    let producto = {
        id:1,
        nombre: "Pack de Fotos",
        precio: 10
    };
carrito.push (producto);
alert("Producto agregado al carrito:", producto);
}

