const stockProductos = [
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

let id1 = parseInt(prompt("Seleccione un ID del 1 al 5"));
let id2 = parseInt(prompt("Seleccione otro ID distinto al primero, del 1 al 5"));

function sumarPreciosConsultados(stockProductos, id1, id2) {
    let suma = 0;
    stockProductos.forEach((producto) => {
      if (producto.id === id1 || producto.id === id2) {
        suma += producto.precio;
      }
    });
    return suma;
}

let resultado = sumarPreciosConsultados(stockProductos, id1, id2);

console.log(`El precio total de los productos con id ${id1} y ${id2} es de ${resultado} pesos`);