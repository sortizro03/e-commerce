import { guardarCarritoStorage, obtenerCarritoStorage, obtenerTotalCantidad, obtenerTotalCompra,guardarTotalCantidad,guardarTotalCompra } from "./storage.js";

const actualizarTotalesCarrito = () => {
    const carrito = obtenerCarritoStorage();
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    guardarTotalCantidad(totalCantidad);
    guardarTotalCompra(totalCompra);
    guardarCarritoStorage(carrito);
    pintarTotalesCarrito();
};

const pintarTotalesCarrito = () => {
    const totalCantidad = obtenerTotalCantidad();
    const totalCompra = obtenerTotalCompra();
    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precioTotal');
    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;
};

export { actualizarTotalesCarrito };