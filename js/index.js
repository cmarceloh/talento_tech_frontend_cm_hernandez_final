// =========================================================================
// index.js - Carga de productos con Fetch API y renderizado en el DOM
// =========================================================================

document.addEventListener("DOMContentLoaded", function () {
  const contenedorProductos = document.getElementById("productos-container");
  const mensajeProductos = document.getElementById("mensaje-productos");

  // Acá guardo las pizzas que traigo del JSON para poder buscarlas al hacer clic
  let productosDisponibles = [];

  // Uso async/await como vimos en Clase 15 para traer los productos sin trabar la página
  async function cargarProductos() {
    try {
      const respuesta = await fetch("data/productos.json");

      // Chequeo response.ok por si hay un error 404 o 500
      if (!respuesta.ok) {
        throw new Error("Error al cargar el catálogo: " + respuesta.status);
      }

      const data = await respuesta.json();
      productosDisponibles = data;

      // Limpio el texto de carga cuando ya llegaron los datos
      if (mensajeProductos) {
        mensajeProductos.textContent = "";
      }

      // Recorro cada pizza con forEach y armo su tarjeta (card) en el DOM
      data.forEach(function (producto) {
        const card = document.createElement("article");
        card.className = "card-producto";

        card.innerHTML = `
          <img
            src="${producto.imagen}"
            alt="${producto.alt}"
            class="card-producto__img"
          />
          <div class="card-producto__body">
            <h3 class="card-producto__titulo">${producto.titulo}</h3>
            <p class="card-producto__descripcion">${producto.descripcion}</p>
            <div class="card-producto__footer">
              <span class="card-producto__precio">$${producto.precio.toLocaleString("es-AR")}</span>
              <button type="button" class="card-producto__btn" data-id="${producto.id}">
                <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i> Agregar
              </button>
            </div>
          </div>
        `;

        contenedorProductos.appendChild(card);
      });
    } catch (error) {
      console.error("Error al obtener productos:", error);
      if (mensajeProductos) {
        mensajeProductos.textContent =
          "Hubo un problema al cargar el menú. Por favor, intentá recargar la página.";
        mensajeProductos.classList.add("mensaje-productos--error");
      }
    }
  }

  // Uso delegación de eventos en el contenedor para detectar los clics en "Agregar"
  if (contenedorProductos) {
    cargarProductos();

    contenedorProductos.addEventListener("click", function (event) {
      const boton = event.target.closest(".card-producto__btn");
      if (!boton) {
        return;
      }

      const idProducto = Number(boton.getAttribute("data-id"));
      const pizzaElegida = productosDisponibles.find(function (item) {
        return item.id === idProducto;
      });

      if (pizzaElegida) {
        agregarAlCarrito(pizzaElegida);
      }
    });
  }
});
