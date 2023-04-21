let descuento = 1.20
let estadoDeLaCompra = 0;
import { validarProductoCarrito } from "./src/accionesCarrito.js";




const mostrarProductos = (libros) =>{
  const contenedor = document.getElementById("libros-contenedor");
    libros.forEach( libro => {

      const div = document.createElement('div');
      div.classList.add('card');

      div.innerHTML = `
          <div class="card-image">
              <img src="${libro.img}">
          </div>
          <div class="card-content">
              <p> <b> Nombre: </b> ${libro.nombre} </p>
              <p> <b> Autor: </b>${libro.autor}</p>
              <p> <b> Precio: </b>${libro.precio}</p>
              <p> <b> Estado: </b>${libro.estado}</p>
              <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${libro.id}><i class="material-icons">add_shopping_cart</i></a>
          </div>
          `

      contenedor.appendChild(div);
      const boton = document.getElementById(`boton${libro.id}`);
      boton.addEventListener('click', () => {
        validarProductoCarrito(libro);
        Toastify({
          text: "Se agrego al carrito ",
          duration: 1000
          }).showToast();
      })
    });
};  



export { mostrarProductos };


