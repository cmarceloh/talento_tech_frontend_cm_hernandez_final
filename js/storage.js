// =========================================================================
// storage.js - Funciones para guardar y leer el carrito en localStorage
// =========================================================================

// Clave única con la que guardamos el carrito en el navegador
const CLAVE_CARRITO = "carrito";

// Leo el carrito guardado en localStorage.
// Como localStorage solo guarda texto, uso JSON.parse para convertirlo en array.
// Si todavía no hay nada guardado, devuelvo un array vacío [].
function obtenerCarrito() {
  const datos = localStorage.getItem(CLAVE_CARRITO);
  return JSON.parse(datos) || [];
}

// Guardo el array del carrito en localStorage convirtiéndolo a texto con JSON.stringify
function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

// Borro por completo el carrito de localStorage (por ejemplo al vaciar o finalizar compra)
function vaciarCarritoStorage() {
  localStorage.removeItem(CLAVE_CARRITO);
}
