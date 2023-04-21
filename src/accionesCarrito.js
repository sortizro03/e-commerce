import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { guardarCarritoStorage, obtenerCarritoStorage } from "./storage.js";

const boton = document.getElementById('comprar-carrito');
    boton.addEventListener('click', () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Compra exitosa',
          showConfirmButton: false,
          timer: 1800
        })
    })


const validarProductoCarrito = (libroActual) => {
    const librosActuales = obtenerCarritoStorage();
    const libroId = libroActual.id;
    const productoRepetido = librosActuales?.find(
    (libro) => libro.id === libroId
    );
  
    if (productoRepetido) {
        const indexLibroActual = librosActuales.findIndex(libro => libro.id === libroId);
        const cantidadActual = librosActuales[indexLibroActual].cantidad;
        const cantidadNueva = cantidadActual + 1;
        console.log(cantidadNueva)
        librosActuales[indexLibroActual].cantidad = cantidadNueva;
        guardarCarritoStorage(librosActuales);
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad: ${cantidadNueva}`
        actualizarTotalesCarrito();
    } else {
        agregarAlCarrito(libroActual);
    }
};

const agregarAlCarrito = (libro) => {
    const librosActuales = obtenerCarritoStorage() || [];
    librosActuales.push(libro);
    guardarCarritoStorage(librosActuales);
    pintarCarrito();
    actualizarTotalesCarrito();
};  



const eliminarProductoCarrito = (libro) => {
    const librosActuales = obtenerCarritoStorage();
    const libroId = libro.id;
    const librosActualizados = librosActuales.filter(item => item.id !== libroId);
    guardarCarritoStorage(librosActualizados);
    const identifier = `carrito-item${libro.id}`;
    const divElement = document.getElementById(identifier);
    const parentElement = divElement.parentNode;
    parentElement.removeChild(divElement);
    actualizarTotalesCarrito();
};

const pintarCarrito = () => {
    const librosActuales = obtenerCarritoStorage();
    const contenedor = document.getElementById('carrito-contenedor');
    contenedor.innerHTML = '';
    librosActuales.forEach(libro => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<div id=carrito-item${libro.id}>
                            <p>${libro.nombre}</p>
                            <p>Precio: ${libro.precio}</p>
                            <p id=cantidad${libro.id}>Cantidad: ${libro.cantidad}</p>
                            <button id=botonEliminar${libro.id} class='btn waves-effect waves-ligth boton-eliminar' value='${libro.id}'>X</button>
                        </div>
        `;
        contenedor.appendChild(div);
        const botonEliminar= document.getElementById(`botonEliminar${libro.id}`);
        botonEliminar.addEventListener("click", (e) => {
            e.stopPropagation();
            console.log("libro: ", libro);
            eliminarProductoCarrito(libro);
          });
        });
    
};
export { validarProductoCarrito, pintarCarrito };