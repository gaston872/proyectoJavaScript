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

letCuadrosEnStorage =
  JSON.parse(localStorage.getItem("cuadros")) ||
  localStorage.setItem("cuadros", JSON.stringify(cuadros));

let addProduct = document.getElementById("addProduct");
let newProductContainer = document.getElementById("newProductContainer");

//************************AGREGAR**************************************** */
const agregarProd = () => {
    let prod = JSON.parse(localStorage.getItem("cuadros"));
    let nombre = document.querySelector("#inputField1").value;
    let tecnica = document.querySelector("#inputField2").value;
    let categoria = document.querySelector("#inputField3").value;
    let precio = document.querySelector("#inputField4").value;
    let estado = document.querySelector("#inputField5").value;
  
    let producto = {
      id: prod.length + 1,
      nombre: nombre,
      tecnica: tecnica,
      categoria: categoria,
      precio: precio,
      estado: estado
    };
    prod.push(producto);
    localStorage.setItem("cuadros", JSON.stringify(prod));
    precioOrdenado(); 
  };


  //************************ELIMINAR**************************************** */
const eliminarCuadro = () =>{
    let arregloObjetos = JSON.parse(localStorage.getItem("cuadros"));
    let id = document.querySelector("#inputField6").value;
    let eliminar = arregloObjetos.filter(item => item.id != id);
    //arregloObjetos.splice(eliminar, 1);
    /* let arrayJson = JSON.stringify(eliminar);
    localStorage.setItem("cuadros", arrayJson); */
    localStorage.setItem("cuadros", JSON.stringify(eliminar));
    precioOrdenado();
}

//************************ORDENAR**************************************** */
const precioOrdenado = () => {
    let contenedor = document.getElementById("container");
     contenedor.innerHTML = "";
     let cuadros = JSON.parse(localStorage.getItem("cuadros"));
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

//************************BUSCAR NOMBRE**************************************** */
const buscarNombre = () => {
  let contenedor = document.getElementById("container");
  contenedor.innerHTML = "";
  const mensaje = () => {
    Swal.fire({
    title: 'Por favor ingrese un nombre',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
    })
  };
  const buscarCuadro = () => {
      let cuadros = JSON.parse(localStorage.getItem("cuadros"));
      let nombreBuscado = cuadros.filter(item => item.nombre.includes(nombre));
      for (const producto of nombreBuscado) {
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
  }
  let nombre = document.querySelector("#inputField7").value;
  nombre === "" ? mensaje() : buscarCuadro();
};

//************************BOTONES**************************************** */
let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", precioOrdenado);

let boton1 = document.getElementById("btn1")
boton1.addEventListener("click", () => {
    let mostrar = document.querySelector(".oculto_name");
    mostrar.classList.remove("oculto_name");
  });
  buscar.addEventListener("click", buscarNombre);

let boton4 = document.getElementById("btn4");
boton4.addEventListener("click", () => {
  let mostrar = document.querySelector(".oculto");
  mostrar.classList.remove("oculto");
});

addProduct.addEventListener("click", agregarProd);



let boton5 = document.getElementById("btn5");
boton5.addEventListener("click", () => {
    let contenedor = document.getElementById("container");
    contenedor.innerHTML = "";
    
    let mostrar = document.querySelector(".oculto_id");
    mostrar.classList.remove("oculto_id");
    precioOrdenado();
});


eliminar.addEventListener("click", () => {
    let arregloObjetos = JSON.parse(localStorage.getItem("cuadros"));
    let id = document.querySelector("#inputField6").value;
    Swal.fire({
      title: "Está seguro de eliminar el producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, seguro",
      cancelButtonText: "No, no quiero",
    }).then((result) => {
      if (result.isConfirmed) {
        let eliminar = arregloObjetos.filter(item => item.id != id);
    localStorage.setItem("cuadros", JSON.stringify(eliminar));
        Swal.fire({
          title: "Borrado!",
          icon: "success",
          text: "El producto ha sido borrado",
        });
      }
      precioOrdenado();
    });
  });

 
  











