import { mostrarProductos } from "./libros.js"
import { actualizarTotalesCarrito } from "./src/actualizarCarrito.js";
// import { libros } from "./src/stock.js";
import { obtenerCarritoStorage } from "./src/storage.js";
import { pintarCarrito } from "./src/accionesCarrito.js"
import { controller } from "./src/controller.js"

document.addEventListener('DOMContentLoaded', async() => {
    const libros = await controller();
    mostrarProductos(libros);

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito();
    }
})


    