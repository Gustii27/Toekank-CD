/*const stockProductos = [
    {
        id:1,
        desc: "Packs de Fotos Chico (50 fotografías)",
        precio: 2000 
    },
    {
        id:2,
        desc: "Packs de Fotos Mediano (100 fotografías)",
        precio: 3900 
    },
    {
        id:3,
        desc: "Packs de Fotos Grande (150 fotografías)",
        precio: 5000 
    },
    {
        id:4,
        desc: "Album de Fotos",
        precio: 6000 
    },
    {
        id:5,
        desc: "Edicion de Photoshop",
        precio: 2500 
    },
]

//--- Suma de productos agregados al carrito ---//

let id1 = parseInt(prompt("Seleccione un ID del 1 al 5"));
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
let usuarios = [];

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

console.log(usuarios);