// =========================================================================
// carrito.js - Renderizado y eventos de la página del carrito (carrito.html)
// =========================================================================

document.addEventListener("DOMContentLoaded", function () {
  const listaCarrito = document.getElementById("lista-carrito");
  const carritoVacio = document.getElementById("carrito-vacio");
  const totalCarrito = document.getElementById("total-carrito");
  const btnVaciarCarrito = document.getElementById("vaciar-carrito");
  const btnFinalizarCompra = document.getElementById("finalizar-compra");
  const mensajeCarrito = document.getElementById("mensaje-carrito");

  // Función que dibuja en el HTML todos los productos guardados en localStorage
  function renderizarCarrito() {
    const carrito = obtenerCarrito();
    let totalPrecio = 0;

    // Limpio la lista antes de volver a armarla para que no se dupliquen los ítems
    listaCarrito.innerHTML = "";

    // Muestro u oculto el aviso de carrito vacío
    carritoVacio.style.display = carrito.length === 0 ? "block" : "none";

    // Recorro el carrito y armo cada fila con imagen, nombre, cantidad, precio y botones
    carrito.forEach(function (producto) {
      const subtotal = producto.precio * producto.cantidad;
      totalPrecio += subtotal;

      const li = document.createElement("li");
      li.className = "carrito-item";

      // Como carrito.html está dentro de pages/, ajusto la ruta de la imagen con ../
      const rutaImagen = producto.imagen.startsWith("../")
        ? producto.imagen
        : "../" + producto.imagen;

      li.innerHTML = `
        <img
          src="${rutaImagen}"
          alt="${producto.alt || producto.titulo}"
          class="carrito-item__img"
        />
        <div class="carrito-item__info">
          <h2 class="carrito-item__titulo">${producto.titulo}</h2>
          <p class="carrito-item__precio">
            Precio unitario: $${producto.precio.toLocaleString("es-AR")} | Subtotal: $${subtotal.toLocaleString("es-AR")}
          </p>
        </div>
        <div class="carrito-item__controles">
          <button type="button" class="btn-cantidad btn-restar" data-id="${producto.id}" aria-label="Restar una unidad de ${producto.titulo}">-</button>
          <span>${producto.cantidad}</span>
          <button type="button" class="btn-cantidad btn-sumar" data-id="${producto.id}" aria-label="Sumar una unidad de ${producto.titulo}">+</button>
          <button type="button" class="btn-eliminar" data-id="${producto.id}" aria-label="Eliminar ${producto.titulo} del carrito">Eliminar</button>
        </div>
      `;

      listaCarrito.appendChild(li);
    });

    // Actualizo el total general de la compra
    totalCarrito.textContent = totalPrecio.toLocaleString("es-AR");
  }

  // Delegación de eventos para los botones +, - y Eliminar dentro de la lista
  listaCarrito.addEventListener("click", function (event) {
    const id = Number(event.target.getAttribute("data-id"));
    if (!id) {
      return;
    }

    mensajeCarrito.textContent = "";

    if (event.target.classList.contains("btn-sumar")) {
      cambiarCantidadProducto(id, 1);
      renderizarCarrito();
    } else if (event.target.classList.contains("btn-restar")) {
      cambiarCantidadProducto(id, -1);
      renderizarCarrito();
    } else if (event.target.classList.contains("btn-eliminar")) {
      eliminarProductoDelCarrito(id);
      renderizarCarrito();
    }
  });

  // Evento para vaciar todo el carrito
  btnVaciarCarrito.addEventListener("click", function () {
    vaciarCarritoCompleto();
    renderizarCarrito();
    mensajeCarrito.textContent = "Vaciaste tu carrito de compras.";
  });

  // Evento para simular la compra final
  btnFinalizarCompra.addEventListener("click", function () {
    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
      mensajeCarrito.textContent =
        "Tu carrito está vacío. ¡Agregá alguna pizza desde el menú!";
      return;
    }

    vaciarCarritoCompleto();
    renderizarCarrito();
    mensajeCarrito.textContent =
      "¡Gracias por tu compra en Pizzarella! Tu pedido ya está en preparación.";
  });

  // Apenas carga la página del carrito, dibujo lo que había guardado en localStorage
  renderizarCarrito();
});
