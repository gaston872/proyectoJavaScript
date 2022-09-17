//CLASE, CONSTRUCTOR, FUNCION BUSCAR POR PRECIO Y ORDENAR POR PRECIO
class Producto {
    constructor(id, nombre, tecnica, categoria, precio, estado) {
        this.id = id;
        this.nombre = nombre;
        this.tecnica = tecnica;
        this.categoria = categoria;
        this.precio = precio;
        this.estado = estado;
    }
};

const cuadros = [
    new Producto(1, "Abstracto multicolor", "Acrilico sobre lienzo", "Abstracto", 15000, "disponible"),
    new Producto(2, "Acuarela botánica", "Acuarela", "Acuarela", 8000, "no disponible"),
    new Producto(3, "Díptico abstracto", "Tecnicas mixtas", "Abstracto", 12000, "disponible"),
    new Producto(4, "Díptico flúo", "Tecnica pouring", "Abstracto", 13000, " no disponible"),
    new Producto(5, "Acuarela floral", "Acuarela", "Acuarela", 7000, "no disponible"),
    new Producto(6, "Protea abstracta", "Acrilico sobre lienzo", "Oleo", 14000, "disponible"),
    new Producto(7, "Acuarela botánica", "Acuarela", "Acuarela", 7500, "no disponible"),
    new Producto(8, "Suculenta", "Oleo sobre papel", "oleo", 8500, "disponible"),
    new Producto(9, "Retrato abuela", "Acrilico sobre lienzo", "Retrato", 10000, "no disponible"),
    new Producto(10, "Retrato Rita", "Acrilico sobre lienzo", "Retrato", 11000, "disponible"),
    new Producto(11, "Autoretrato", "Acrilico sobre lienzo", "Retrato", 10500, "no disponible"),
];

const buscarId = () => {
    let contenedor = document.getElementById("contenedor");
    let id = prompt("ingrese id (1-11)");
    while ((/\D/.test(id)) || (id < 1 || id > 11) || (id === "")) {
        id = prompt("Ingrese un número del 1 al 11");
    }
    let idBuscado = cuadros.filter(item => item.id == id);
    for(const producto of idBuscado) {
        let div = document.createElement("div");
        div.innerHTML = `
        <h2>id: ${producto.id}</h2>  
        <p>nombre: ${producto.nombre}</p>
        <p>tecnica: ${producto.tecnica}</p>
        <p>categoria: ${producto.categoria}</p>
        <p>estado: ${producto.estado}</p>
        <b>$${producto.precio}`
        ;
        contenedor.append(div);
    };
}

//BUSCAR POR NOMBRE
const buscarNombre = () => {
    let contenedor = document.getElementById("contenedor");
    let nombre = prompt("Ingrese el nombre a buscar");
    while (nombre == ""){
        nombre = prompt("Por favor ingrese el nombre a buscar");
    }
    let nombreBuscado = cuadros.filter(item => item.nombre.includes(nombre));
    for(const producto of nombreBuscado) {
        let div = document.createElement("div");
        div.innerHTML = `
        <h2>id: ${producto.id}</h2>  
        <p>nombre: ${producto.nombre}</p>
        <p>tecnica: ${producto.tecnica}</p>
        <p>categoria: ${producto.categoria}</p>
        <b>$${producto.precio}`
        ;
        contenedor.append(div);
    }
};

const consultaPrecio = () => {
    let contenedor = document.getElementById("contenedor");
    let precio = parseInt(prompt("Ingrese el precio mínimo"));
    while(/\D/.test(precio) || precio == ""){
        precio = parseInt(prompt("Debe ingresar un número"));
    }
    let precioMinimo = cuadros.filter(item => item.precio > precio && item.estado == "disponible");
    for(const producto of precioMinimo){
        let div = document.createElement("div");
        div.innerHTML = `
             <h2>id: ${producto.id}</h2>  
             <p>nombre: ${producto.nombre}</p>
             <p>tecnica: ${producto.tecnica}</p>
             <p>categoria: ${producto.categoria}</p>
             <b>$${producto.precio}`
             ;
            contenedor.append(div);
    };
};

const precioOrdenado = () => {
    let contenedor = document.getElementById("contenedor");
    ordenPrecio = cuadros.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1;
        }
        if (a.precio < b.precio) {
            return -1;
        }
        return 0;
    });
    for(const producto of ordenPrecio) {
        let div = document.createElement("div");
        div.innerHTML = `
            <h2>id: ${producto.id}</h2>
            <p>nombre: ${producto.nombre}</p>
            <b>$${producto.precio}
            `
            ;
            contenedor.append(div); 
    };
};

function simular() {
let opc = prompt(`Ingrese la opción que desea usar: 1-Buscar por Id; 2-Buscar por nombre; 3-Buscar precio mínimo; 4-Ordenar por precio`);
while ((/\D/.test(opc)) || (opc < 1 || opc > 4) || (opc == "")) {
    opc = prompt("Número incorrecto, ingrese opción 1-4")
};
switch (opc) {
    case "1":
        buscarId();
        break;
    case "2":
        buscarNombre();
        break;
    case "3":
        consultaPrecio();
        break;
    case "4":
        precioOrdenado();
        break;
    default:
        alert("Hasta luego");
};
}

simular();

/* let opcion = prompt("Desea realizar una operación? S/N");
while (opcion === "S" || opcion ==="s"){
    simular();
    //opcion = prompt("Desea realizar otra operación? S/N")
} */
/* if (opcion !="S" || opcion!="s") {
    alert("Hasta luego")
}  */











