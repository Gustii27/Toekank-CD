const botonCarrito = document.querySelector('#agregar-carrito');

botonCarrito.addEventListener('click', agregarAlCarrito);

let carrito = [];

function agregarAlCarrito() {
    let producto = {
        id:1,
        nombre: "producto 1",
        precio: 10
    };
carrito.push (producto);
console.log("Producto agregado al carrito:", producto);
}

