//CLASE, CONSTRUCTOR, FUNCION BUSCAR POR PRECIO Y ORDENAR POR PRECIO
class Producto{
    constructor (id, nombre, tecnica, categoria, precio, estado){
        this.id = id;
        this.nombre = nombre;
        this.tecnica = tecnica;
        this.categoria = categoria;
        this.precio = precio;
        this.estado = estado;
    }
};

const cuadros = [
    new Producto(1, "Abstracto multicolor", "Acrilico sobre lienzo", "Abstracto", 15000, "disponible" ),
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

//BUSCAR POR ID
/* const buscarId = () => { let id = prompt("ingrese id (1-11)");
while (id < 1 || id > 11 ){
    id = prompt("Ingrese un número del 1 al 11");
}
let idBuscado = cuadros.filter(item => item.id == id);
idBuscado.forEach(item => {
    let mensaje = `
        id: ${item.id}  
        nombre: ${item.nombre}
        tecnica: ${item.tecnica}
        categoria: ${item.categoria}
        precio: ${item.precio};
        estado: ${item.estado}`
        return alert(mensaje);
});
}
let resp = prompt("desea ver información de un cuadro?")
if (resp == "S" || resp == "s"){
   buscarId();
}; */

//BUSCAR POR NOMBRE
const buscarNombre = () => {
    let nombre = prompt("Ingrese el nombre a buscar");
    let nombreBuscado = cuadros.filter(item => item.nombre.includes(nombre));
    nombreBuscado.forEach(item => {
        let mensaje = `
            id: ${item.id}  
            nombre: ${item.nombre}
            tecnica: ${item.tecnica}
            categoria: ${item.categoria}
            precio: ${item.precio};`
            return alert(mensaje);
    });
};
//buscarNombre();

//BUSCAR PRECIO MAYOR AL INGRESADO
const consultaPrecio = () =>{
let precio = parseInt(prompt("Ingrese el precio mínimo"));
let precioMinimo = cuadros.filter(item => item.precio > precio && item.estado == "disponible");
precioMinimo.forEach(item => {
    let mensaje = `
             id: ${item.id}  
             nombre: ${item.nombre}
             tecnica: ${item.tecnica}
             categoria: ${item.categoria}
             precio: ${item.precio};`
              return alert(mensaje);
});
};
//consultaPrecio();

//ORDENAR POR PRECIO
const precioOrdenado = () => {
ordenPrecio = cuadros.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio <  b.precio) {
        return -1;
    }
    return 0;
});
ordenPrecio.forEach(item => {
    let mensaje = `
            id: ${item.id}
            nombre: ${item.nombre}
            precio: ${item.precio}
            `
        return alert(mensaje);
});
};
//precioOrdenado();
