let btnCarrito = document.querySelector("#cart");
let carrito = document.querySelector(".cart-modal-overlay");
let cerrarCarrito = document.querySelector("#close-btn");
let arrayCarrito = []

class Producto{
    constructor(id, nombre, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}
//abrir y cerrar el carrito
function abriCerrarCarrito() {
    if(carrito.classList.contains("open")) {
        carrito.classList.remove("open");
    } else {
        carrito.classList.add("open");
    }
    
}
btnCarrito.addEventListener("click", abriCerrarCarrito);
cerrarCarrito.addEventListener("click", abriCerrarCarrito);

//agregar elementos al carrito
let botonesComprar = document.querySelectorAll(".add-to-cart");
console.log(botonesComprar);
for(let i=0; i < botonesComprar.length; i++) {
    let boton = botonesComprar[i];
    boton.addEventListener("click", agregarCarrito);
}

function agregarCarrito(e) {
    let boton = e.target;
    let padre = boton.parentElement;
    let prodId = padre.getAttribute("id");
    let prodNombre = padre.querySelector("h3").innerText;
    let precio = padre.querySelector(".product-price").innerText;
    let imagen = padre.querySelector(".product-image").src;

    let prodNuevo = new Producto(prodId, prodNombre, imagen, precio);
    arrayCarrito.push(prodNuevo);

    localStorage.setItem("carrito", JSON.stringify(arrayCarrito));

    agregarElemCarrito(prodNuevo);

}

function agregarElemCarrito(producto){
    let contenedorCarrito = document.querySelector(".product-rows");
    let carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    console.log(carritoStorage);
    contenedorCarrito.innerHTML += `
        <div class='product-row' id='${producto.id}'>
            <img class='cart-image' src='${producto.imagen}' />
            <span>${producto.nombre}</span>
            <span>${producto.precio}</span>
            <button class='remove-btn'>X</button>
        </div>
    `
    cartQuantity();
}

function cartQuantity() {
    let cantidad = document.querySelector(".cart-quantity");
    cantidad.innerText = arrayCarrito.length;
}