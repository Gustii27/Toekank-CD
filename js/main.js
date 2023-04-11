const stockProductos = [
    {
        id: 1,
        titulo: "Packs de Fotos Chico (50 fotografías)",
        descripcion: "¿Te gustaría rememorar los mejores momentos? Hay disponibilidad de Packs de 50 imágenes, 100 imágenes y 150 imágenes.",
        img: "../public/img/packs-fotos-1.jpg",
        precio: 2000,
        radio: -1,
        cantidad: 1
    },
    {
        id: 2,
        titulo: "Packs de Fotos Mediano (100 fotografías)",
        descripcion: "¿Te gustaría rememorar los mejores momentos? Hay disponibilidad de Packs de 50 imágenes, 100 imágenes y 150 imágenes.",
        img: "../public/img/packs-fotos-1.jpg",
        precio: 3900,
        radio: -2,
        cantidad: 1 
    },
    {
        id: 3,
        titulo: "Packs de Fotos Grande (150 fotografías)",
        descripcion: "¿Te gustaría rememorar los mejores momentos? Hay disponibilidad de Packs de 50 imágenes, 100 imágenes y 150 imágenes.",
        img: "../public/img/packs-fotos-1.jpg",
        precio: 5000,
        radio: -3,
        cantidad: 1 
    },
    {
        id: 4,
        titulo: "Album de Fotos",
        descripcion: "Los mejores Albums de Fotos con un diseño personalizado, con el cual podrá mostrarle a todos sus seres queridos sus momentos más preciados.",
        img: "../public/img/album-fotos-2.jpg",
        precio: 6000,
        cantidad: 1 
    },
    {
        id: 5,
        titulo: "Edicion de Photoshop",
        descripcion: "¿Desea sobresalir entre sus queridos adquiriendo fotos de una mayor calidez, mayor calidad y contraste?. Tiene a disposición este adicional de Edición Fotografica.",
        img: "../public/img/chanel.jpg",
        precio: 2500,
        cantidad: 1 
    },
];

// Traigo al DOM los documentos del HTML
const tarjetasProd = document.querySelector(".tarjetasProd");
const ventanaCarrito = document.getElementById("vistaCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");

const vistaPagar = document.getElementById("vistaPagar");
const btnConfirmarCompra = document.querySelector(".confirmarCompra");

// Creo dinamicamente las vistas de las tarjetas.

function mostrarProductos (){
    tarjetasProd.innerHTML = "";

    stockProductos.forEach((producto) => {
        const divTarjetas = document.createElement("div");
        divTarjetas.className = "col";
        divTarjetas.innerHTML = `
        <div class="card" id=${producto.id}>
            <div class= "card-body">
                <img src="${producto.img}" class="card-img-top img-fluid altura-img" alt="${producto.titulo}">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">${producto.descripcion}</p>
                ${producto.radio ? `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="opciones-${producto.id}" id="${producto.radio}-1">
                    <label class="form-check-label" for="${producto.radio}-1">${producto.titulo} Precio: $${producto.precio}</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="opciones-${producto.id}" id="${producto.radio}-2">
                    <label class="form-check-label" for="${producto.radio}-2">${producto.titulo} Precio: $${producto.precio}</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="opciones-${producto.id}" id="${producto.radio}-3">
                    <label class="form-check-label" for="${producto.radio}-3">${producto.titulo} Precio: $${producto.precio}</label>
                </div>
                ` : ''}
                <button class="button-contacts btn-add-prod">Agregar al Carrito</button>
            </div>
        </div>`

        divTarjetas.querySelector(".btn-add-prod").addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        });

        tarjetasProd.append(divTarjetas);
    });
}
mostrarProductos();

// Creo un carrito vacio, donde se van a ir agregando los productos.
const carrito = [];

// Creo la función de agregar al carrito con el boton que está estático en el HTML.
function agregarAlCarrito (prodId){
    // Verifico si ya está agregado el producto al carrito.
    const existeEnCarrito = carrito.some(prod => prod.id === prodId);
    // Creo la condición en base al valor true o false que devuelve existeEnCarrito.
    if (existeEnCarrito){
        // Si el resultado es true, entonces busco el producto y le sumo 1 cantidad más.
        const productoEncontrado = carrito.find(prod => prod.id === prodId);
        productoEncontrado.cantidad++;
    } else {
        // Si el resultado es false, entonces me busca el producto y lo agrega al array de productos.
        const productoEncontrado = stockProductos.find(prod => prod.id === prodId);
        carrito.push(productoEncontrado);
    }
    actualizarCarrito();
}

function eliminarDelCarrito (prodId) {
    const item = carrito.find(prod => prod.id === prodId) // Busco el producto en el carrito.
    const index = carrito.indexOf (item) // Tomo el valor de "item" y obtengo la posición del producto en el carrito.
    carrito.splice(index, 1); // Una vez encontrado, lo elimino.
    
    actualizarCarrito(); // Vuelvo actualizar la pantalla.
}

function actualizarCarrito(){
    ventanaCarrito.innerHTML = "";

    carrito.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "row mb-3 justify-content-around";
        div.innerHTML = `
        <div class="col-md-3">    
            <p>${prod.titulo}</p>
        </div>
        <div class="col-md-3">
            <p>Precio: $${prod.precio}
        </div>
        <div class="col-md-3">
            <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        </div>
        <div class="col-md-3">
            <button class="botonEliminar btn btn-danger" id="${prod.id}"><i class="fa-solid fa-trash"></i></button>
        </div>`

        div.querySelector(".botonEliminar").addEventListener("click", () => {
            eliminarDelCarrito()
        })

        ventanaCarrito.appendChild(div);
    })
    contadorCarrito.innerHTML = carrito.length; // hago un contador de productos en el icono flotante.
    precioTotal.innerHTML = carrito.reduce((acumulador, prod) => acumulador + prod.precio * prod.cantidad, 0); // por cada producto agregado al carrito, se aplica un acumulador, hace que se sumen los productos.
}

// Segunda vista dinámica al presionar el boton de confirmar compra.

function mostrarCarrito() {
    const itemsCarrito = document.querySelector(".itemsCarrito");

    itemsCarrito.innerHTML = "";
    
    carrito.forEach((producto) => {
        const divItems = document.createElement("div");
        divItems.className = "container text-center"
        divItems.innerHTML = `
        <div class="row">
            <div class="col align-self-center">
              <p class="">${producto.titulo}</p>
              <p>Cantidad: ${producto.cantidad}</p>
              <p>Precio total: $${producto.precio * producto.cantidad}</p>  
            </div>

            <div class="col align-self-center">
                <div class="opciones-pago">
                    <label for="cuotas">Selecciona la cantidad de cuotas:</label>
                    <select id="cuotas" name="cuotas">
                        <option value="1">1 cuota</option>
                        <option value="2">3 cuotas</option>
                        <option value="3">6 cuotas</option>
                    </select>
                    <button id="pagar">Pagar</button>
                </div>
            </div>
        </div>`;
        itemsCarrito.append(divItems);
    })
}

btnConfirmarCompra.addEventListener("click", () => {
    mostrarCarrito();
    ventanaCarrito.style.display = "none"; // Oculto la pantalla dinámica anterior.
    document.getElementById("vistaPagar").style.display = "block"; // Muestro la segunda vista dinámica.
});









//--- Suma de productos agregados al carrito ---//

/*let id1 = parseInt(prompt("Seleccione un ID del 1 al 5"));
let id2 = parseInt(prompt("Seleccione otro ID del 1 al 5"));

// Se valida con un loop WHILE que los IDs ingresados esten en stockProductos

while (!stockProductos.some(producto => producto.id === id1) || !stockProductos.some(producto => producto.id === id2)) {
    
    console.log("Uno o ambos IDs no son válidos");
    
    id1 = parseInt(prompt("Seleccione un ID del 1 al 5"));
    id2 = parseInt(prompt("Seleccione otro ID del 1 al 5"));
  }

function sumarPreciosConsultados(stockProductos, id1, id2) {
    
    let suma = 0;
    let mismoId = 0;
    
    stockProductos.forEach((producto) => {
        if (producto.id === id1 || producto.id === id2) {
        suma += producto.precio;
        mismoId++; //para que me guarde en una variable si los id ingresados son iguales
      } 

      if (mismoId === 1 && producto.id === id2) { //hace la comprobación de igualdad de 2 id, y los suma
        suma += producto.precio;
      }

    });
    return suma;
}

let resultado = sumarPreciosConsultados(stockProductos, id1, id2);

console.log(`El precio total de los productos con id ${id1} y ${id2} es de ${resultado} pesos`);



//--- Posibilidad de pagar con tarjeta de crédito ---//

let consultaCuotas = parseInt(prompt("Ingrese cantidad de cuotas; 1, 3, 6 y 12 cuotas sin interes"));
let cantidadCuotas = [1, 3, 6, 12];

// Se valida con un loop WHILE que la cantidad de cuotas que ingresa el usuario sea un valor disponible en el array, de no ser así el loop no se detendrá y solicitará ingresar un numero válido

while (!cantidadCuotas.some(cuotas => cuotas === consultaCuotas)) {
    console.log("La cantidad de cuotas ingresada no es válida");
    consultaCuotas = parseInt(prompt("Ingrese cantidad de cuotas; 1, 3, 6 y 12 cuotas sin interes"));
}

function calculoCuotas(stockProductos, id1, id2, consultaCuotas){
    let cuotas = sumarPreciosConsultados(stockProductos, id1, id2);
    return (cuotas/consultaCuotas); 
}

let resultadoCuotas = calculoCuotas(stockProductos, id1, id2, consultaCuotas);

console.log(`El precio total de los productos seleccionados es de ${resultado} en ${consultaCuotas} cuotas de ${resultadoCuotas} pesos`);*/

// FORMULARIO INGRESO A UN ARRAY DE NUEVOS CLIENTES

// Creo un array de objetos vacio para que se complete con una función a medida que el usuario ingresa datos.
/*const nuevosUsuarios = [{
}];

// Solicito al usuario cargar la información solicitada.
let userName = prompt("Ingrese su nombre");
let userApellido = prompt("ingrese su apellido");
let userEmail = prompt("Ingrese su correo electrónico");
let userMsg = parseInt(prompt("Ingrese su mensaje"));


// A traves de una función hago que al momento de encontrar un id genere un incremento automático.
function idUser(id){
    nuevosUsuarios.some(encontrado =>{
        encontrado.id === 1;
    return id++;    
    })
}*/

// Creo una variable global para que me sume solo los id.
/*let idCount = 0;

// Solicito al usuario cargar la información solicitada.
let userName = (prompt("Ingrese su nombre"));
let userApellido = (prompt("ingrese su apellido"));
let userMail = (prompt("Ingrese su correo electrónico"));
let userMsg = (prompt("Ingrese su mensaje"));

// Creo una clase constructora para que me vaya creando el registro de usuarios ingresados.
class Usuario {
    constructor(nombre, apellido, mail, msg) {
        this.id = ++idCount;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.msg = msg;
    }
}

// Asigno los valores ingresados por el usuario en un objeto para almacenar.
const usuario1 = new Usuario(userName, userApellido, userMail, userMsg, idCount)

console.log(usuario1);*/

// ALTERNATIVA UTILIZANDO ARRAY 

// Crear un array vacio para almacenar los usuarios
/*let usuarios = [];

// Variable global para llevar la cuenta del ultimo ID utilizado
let ultimoId = 0;

// Defino la clase Usuario
class Usuario {
    constructor(nombre, apellido, mail, msg, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.msg = msg;
        this.id = id;
    }
}

// Solicitar al usuario cargar la informacion solicitada.
let userName = (prompt("Ingrese su nombre"));
let userApellido = (prompt("Ingrese su apellido"));
let userMail = (prompt("Ingrese su correo electrónico"));
let userMsg = (prompt("Ingrese su mensaje"));

// Crear una instancia del objeto Usuario y asignarle un ID único
const usuario1 = new Usuario(userName, userApellido, userMail, userMsg, ++ultimoId);

// Agregar el nuevo usuario al array usuarios
usuarios.push(usuario1);

console.log(usuarios);*/