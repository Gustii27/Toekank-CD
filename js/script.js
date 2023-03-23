const stockProductos = [
    {
        id:1,
        titulo: "Packs de Fotos Chico (50 fotografías)",
        precio: 2000,
        cantidad: 1
    },
    {
        id:2,
        titulo: "Packs de Fotos Mediano (100 fotografías)",
        precio: 3900,
        cantidad: 1 
    },
    {
        id:3,
        titulo: "Packs de Fotos Grande (150 fotografías)",
        precio: 5000,
        cantidad: 1 
    },
    {
        id:4,
        titulo: "Album de Fotos",
        precio: 6000,
        cantidad: 1 
    },
    {
        id:5,
        titulo: "Edicion de Photoshop",
        precio: 2500,
        cantidad: 1 
    },
];
// Creo un espacio en memoria para almacenar a los productos que se agreguen al carrito.
const carrito = [];

// Traigo todos los documentos del DOM.

const btnAgregarDeTarjeta = document.querySelector(".btn-add-prod"); // Botones de HTML para agregar productos.
const tarjetaProductos = document.querySelector(".modal-body"); // Div flotante del carrito de compras.

function mostrarProductos (){
    tarjetaProductos.innerHTML = ""; // Para que comience vacio.

    stockProductos.forEach((producto) =>{ // itero el array de objetos   
        const div = document.createElement("div") // creo un div donde se van a estar agregando los productos
        div.className = "container-fluid" // le asigno una clase al div
        div.innerHTML = `
        <h5 class = "card-title">${producto.titulo}</h5>
        <p class = "card-text">Precio $${producto.precio}</p>
        <p class = "card-text">Cantidad: ${producto.cantidad}</p>
        <button onClick="eliminarDelCarrito(${producto.id})" class="eliminarProducto"><i class="fa-solid fa-trash"></i></button>` // inserto el codigo HTML de lo que contendrá el div.
        
        tarjetaProductos.appendChild(div); //inserto el div en el modalBody

        /*const btnEliminarProd = document.querySelector(".eliminarProducto"); // Traigo al DOM el boton creado dinamicamente
        btnEliminarProd.addEventListener("click", (e) => {
            e.preventDefault();
            const id = e.target.getAttribute("data-id"); // Me busca el producto a través del data-id que tiene declarado en el boton.
            eliminarDelCarrito(carrito, id); // Ejecuto la funcion de eliminar del carrito.
            div.remove; // Elimina del DOM el elemento.
        });*/        
    })

    btnAgregarDeTarjeta.addEventListener("click", () => agregarAlCarrito);
}

// Creo la función de agregar al carrito con el boton que está estático en el HTML.
function agregarAlCarrito (prodId) { 
    // Verifico si ya está agregado el producto al carrito.
    const existeEnCarrito = carrito.some(prod => prod.id === prodId)
    // Creo la condición en base al valor true o false que devuelve existeEnCarrito.
    if (existeEnCarrito){
        // Si el resultado es true, entonces busco el producto y le sumo 1 cantidad más.
        const productoEncontrado = carrito.find (prod => prod.id === prodId)
        productoEncontrado.cantidad++;
    } else {
        // Si el resultado es false, entonces me busca el producto y lo agrega al array de productos.
        const productoEncontrado = stockProductos.find (prod => prod.id === prodId)
        carrito.push(productoEncontrado);
        console.log(carrito);
    }
    mostrarProductos();
}

function eliminarDelCarrito (prodId) {
    const item = carrito.find(prod => prod.id === prodId) // Busco el producto en el carrito.
    const index = carrito.indexOf (item) // Tomo el valor de "item" y obtengo la posición del producto en el carrito.
    carrito.splice(index, 1); // Una vez encontrado, lo elimino.
    mostrarProductos(); // Vuelvo actualizar la pantalla.
}
