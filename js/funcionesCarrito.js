// =========================================================================
// funcionesCarrito.js - Lógica para agregar, editar y eliminar del carrito
// =========================================================================

// Agrego una pizza al carrito; si ya estaba, le sumo 1 a la cantidad
function agregarAlCarrito(pizza) {
  const carrito = obtenerCarrito();

  // Busco con find si la pizza ya existe en el carrito
  const productoExistente = carrito.find(function (item) {
    return item.id === pizza.id;
  });

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({
      id: pizza.id,
      titulo: pizza.titulo,
      precio: pizza.precio,
      imagen: pizza.imagen,
      alt: pizza.alt,
      cantidad: 1,
    });
  }

  // Guardo el carrito actualizado en localStorage y actualizo el contador
  guardarCarrito(carrito);
  actualizarContadorCarrito();

  alert("¡Agregaste " + pizza.titulo + " al carrito!");
}

// Sumo o resto 1 unidad de un producto según el botón que tocó el usuario
function cambiarCantidadProducto(idProducto, cambio) {
  let carrito = obtenerCarrito();

  carrito.forEach(function (item) {
    if (item.id === idProducto) {
      item.cantidad += cambio;
    }
  });

  // Si la cantidad bajó a 0, lo saco del carrito usando filter
  carrito = carrito.filter(function (item) {
    return item.cantidad > 0;
  });

  guardarCarrito(carrito);
  actualizarContadorCarrito();
}

// Elimino un producto puntual del carrito
function eliminarProductoDelCarrito(idProducto) {
  const carrito = obtenerCarrito();
  const carritoActualizado = carrito.filter(function (item) {
    return item.id !== idProducto;
  });

  guardarCarrito(carritoActualizado);
  actualizarContadorCarrito();
}

// Vacío todo el carrito
function vaciarCarritoCompleto() {
  vaciarCarritoStorage();
  actualizarContadorCarrito();
}
