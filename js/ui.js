// =========================================================================
// ui.js - Funciones de interfaz (menú responsive y contador del carrito)
// =========================================================================

// Actualizo el numerito del carrito en la barra de navegación sumando las cantidades
function actualizarContadorCarrito() {
  const contadorCarrito = document.getElementById("contador-carrito");
  if (!contadorCarrito) {
    return;
  }

  const carrito = obtenerCarrito();
  let cantidadTotal = 0;

  carrito.forEach(function (producto) {
    cantidadTotal += producto.cantidad;
  });

  contadorCarrito.textContent = cantidadTotal;
}

// Manejo el menú hamburguesa para celulares y tablets
function inicializarMenu() {
  const navToggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".nav");

  if (!navToggle || !navigation) {
    return;
  }

  function cerrarMenu() {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menú");
    navToggle.querySelector("i").className = "fa-solid fa-bars";
    navigation.classList.remove("is-open");
  }

  // Abro o cierro el menú al hacer clic en el botón
  navToggle.addEventListener("click", function () {
    const estaAbierto = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!estaAbierto));
    navToggle.setAttribute(
      "aria-label",
      estaAbierto ? "Abrir menú" : "Cerrar menú"
    );
    navToggle.querySelector("i").className = estaAbierto
      ? "fa-solid fa-bars"
      : "fa-solid fa-xmark";
    navigation.classList.toggle("is-open", !estaAbierto);
  });

  // Cierro el menú si el usuario toca un enlace
  navigation.addEventListener("click", function (event) {
    if (event.target.closest(".nav__link")) {
      cerrarMenu();
    }
  });

  // Cierro el menú si aprieta la tecla Escape (accesibilidad por teclado)
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      cerrarMenu();
      navToggle.focus();
    }
  });
}

// Apenas carga cualquier página del sitio, inicializo el menú y el contador del carrito
document.addEventListener("DOMContentLoaded", function () {
  inicializarMenu();
  actualizarContadorCarrito();
});
