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

const precioOrdenado = () => {
    let contenedor = document.getElementById("container");
     contenedor.innerHTML = "";
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
            <div class = "container_info">
            <h2>id: ${producto.id}</h2>
            <h3>Nombre: ${producto.nombre}</h3>
            <b>$${producto.precio}
            </div>
            `
            ;
            contenedor.append(div); 
            div.classname = "container_info";
    };
};

const buscarNombre = () => {
    let contenedor = document.getElementById("container");
    contenedor.innerHTML = "";
    let nombre = prompt("Ingrese el nombre a buscar");
    while (nombre == ""){
        nombre = prompt("Por favor ingrese el nombre a buscar");
    }
    let nombreBuscado = cuadros.filter(item => item.nombre.includes(nombre));
    for(const producto of nombreBuscado) {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class = "container_info">
        <h2>id: ${producto.id}</h2>  
        <p>nombre: ${producto.nombre}</p>
        <p>tecnica: ${producto.tecnica}</p>
        <p>categoria: ${producto.categoria}</p>
        <b>$${producto.precio}`
        ;
        contenedor.append(div);
    }
};

let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", precioOrdenado);

let boton1 = document.getElementById("btn1")
boton1.addEventListener("click", buscarNombre);











