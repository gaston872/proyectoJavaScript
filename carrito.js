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

letCuadrosEnStorage =
    JSON.parse(localStorage.getItem("cuadros")) ||
    localStorage.setItem("cuadros", JSON.stringify(cuadros));

let carrito = [];

const items = document.querySelector("#items");
const carritoHTML = document.querySelector("#carrito");

function renderizarProductos() {
    let prodRend = JSON.parse(localStorage.getItem("cuadros"));
    prodRend.forEach((producto) => {
        let productoHTML = `
            <div class="col-12 col-md-6 mb-5 d-flex justify-content-center">
            <div class="card text-light bg-dark" style="width: 18rem;">
                <img class="card-img-top" src="./img/pintando.jpg" alt="Card Image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.categoria}</p>
                    <p>$${producto.precio}</p>
                    <button class="btn btn-primary" onclick="agregarProductoAlCarrito(${producto.id})">Añadir al carrito</button>
                 </div>
            </div>
            </div>
        `;
        items.innerHTML += productoHTML;
    })
}
renderizarProductos();


function agregarProductoAlCarrito(id) {
    let cuadrosCarrito = JSON.parse(localStorage.getItem("cuadros"));
    let prod = cuadrosCarrito.find((producto) => producto.id === id);

    let prodCarrito = carrito.find((producto) => producto.id === id);
    if (prodCarrito) {
        prodCarrito.cantidad++;
    } else {
        prod.cantidad = 1;
        carrito.push(prod);
    }

    renderizarCarrito()

    calcularTotal()

}

function renderizarCarrito() {
    let htmlCarrito = "";
    carrito.forEach((prod, id) => {
        htmlCarrito += `
        <div class="col-12 mb-5 d-flex flex-row justify-content-center">
        <div class="card text-dark flex-row" style="width: 30rem;">
         <div>
            <img class="card-img-top" src="./img/pintando.jpg" alt="Card Image cap">
         </div>  
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p>$${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button class="btn btn-danger" onclick="eliminarProductoDelCarrito(${id})">Eliminar</button>
             </div>
        </div>
        </div>
        `;
    })
    carritoHTML.innerHTML = htmlCarrito;
}

function calcularTotal(){
    let total = 0;
    carrito.forEach((prod) =>{
        total += prod.precio * prod.cantidad;
    });
    const t = document.getElementById("total");
    t.innerHTML = `<h5>$${total}</h5>`;
}

function eliminarProductoDelCarrito(id){
    carrito[id].cantidad--;
    if(carrito[id].cantidad === 0){
        carrito.splice(id, 1);
    }
    renderizarCarrito();
    calcularTotal();
}

function vaciarCarrito (){
    carrito = [];
    renderizarCarrito();
    calcularTotal();
}

const vaciar = document.querySelector("#boton-vaciar");
vaciar.addEventListener("click", vaciarCarrito);

const DateTime = luxon.DateTime;
const hoy = DateTime.now();

  const confirmar = document.querySelector("#boton-confirmar");
confirmar.addEventListener("click", () => {
    Swal.fire({
        title: 'Confirma compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
    }).then((result) => {
        if (result.isConfirmed) {
            let fecha = new Date();
            let total = 0;
            carrito.forEach((prod) =>{
            total += prod.precio * prod.cantidad;
            });
        Swal.fire(
            `Su compra de $${total} fue confirmada`,
            `El día: ${hoy.toLocaleString(DateTime.DATE_SHORT)}, a las ${hoy.toLocaleString(DateTime.TIME_SIMPLE)}`,
            'Your file has been deleted.',
            'success'
        )
        vaciarCarrito()
        }
    })
});

const convertirMoneda = async () => {
    try{
        const resp = await
        fetch("https://api.currencyapi.com/v3/latest?apikey=pnzlEQk9UTRLWh6vGbs3zEt7zDvUWnIRbz1pJrlT")
        const data = await resp.json()
        console.log(data);
    let total = 0;
            carrito.forEach((prod) =>{
            total += prod.precio * prod.cantidad;
            });
    let usd = (data.data.USD.value / data.data.ARS.value) * total;
    let eur = (data.data.EUR.value / data.data.ARS.value) * total;
    let brl = (data.data.BRL.value / data.data.ARS.value) * total;
    
    Swal.fire(`USD: $${usd.toFixed(2)}
            EUR: $${eur.toFixed(2)}
            BRL: $${brl.toFixed(2)}
      `);
} catch {
    Swal.fire(`Error`);
};
};
const moneda = document.querySelector("#boton-moneda");
moneda.addEventListener("click", convertirMoneda);