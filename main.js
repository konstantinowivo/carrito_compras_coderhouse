const producto = [
    { nombre: "extintor 1", precio: 2700 },
    { nombre: "extintor 2", precio: 11000 },
    { nombre: "extintor 3", precio: 18000 },
];

let carrito = []

let seleccion = prompt("hola! deseas comprar algún producto?");

while(seleccion != "si" && seleccion != "no"){
    alert("favor de responder con si o no")
    seleccion = prompt("hola! deseas comprar algún producto?")
}

if(seleccion == "si"){
    alert("Catálogo de productos:")
    let catalogoProductos = producto.map((producto) => producto.nombre + " " + "$" + producto.precio);
    alert(catalogoProductos.join(" - "))
} else if(seleccion == "no"){
    alert("Muchas gracias por tu visita!")
}

while(seleccion != "no"){
    let producto = prompt("agregar producto:")
    let precio = 0

if(producto == "extintor 1" || producto == "extintor 2" || producto == "extintor 3"){
    switch(producto){
        case "extintor 1":
            precio = 2700;
            break;
        case "extintor 2":
            precio = 11000;
            break;
        case "extintor 3":
            precio = 18000;
            break;
    }
let cantidad = parseInt(prompt("cantidad de productos?"));

carrito.push({producto, cantidad, precio})
console.log(carrito)
} else{
    alert("no existe ese producto")
}

seleccion = prompt("desea seguir comprando?");


while(seleccion === "no"){
    alert(`gracias por su compra`)
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.cantidad}, total: ${carritoFinal.cantidad * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
console.log(`el total a pagar por su compra es: ${total}`)


function suma(){
    console.log(total);
    alert(`El monto final de tu compra es: $ ${total}`)
    }

suma(total)






