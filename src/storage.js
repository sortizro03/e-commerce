const guardarCarritoStorage = (carrito) => {
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    return carritoStorage;
};
const guardarTotalCantidad = (totalCantidad) => {
    localStorage.setItem('totalCantidad', totalCantidad);
};

const obtenerTotalCantidad = () => {
    const totalCantidad = localStorage.getItem('totalCantidad');
    return totalCantidad;
};
const guardarTotalCompra = (totalCompra) => {
    localStorage.setItem('totalCompra', totalCompra);
};

const obtenerTotalCompra = () => {
    const totalCompra = localStorage.getItem('totalCompra');
    return totalCompra;
};

export {
    guardarCarritoStorage,
    obtenerCarritoStorage,
    obtenerTotalCantidad,
    guardarTotalCantidad,
    obtenerTotalCompra,
    guardarTotalCompra
};