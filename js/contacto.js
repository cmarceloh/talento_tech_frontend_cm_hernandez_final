// =========================================================================
// contacto.js - Validación del formulario de contacto y envío con Formspree
// =========================================================================

document.addEventListener("DOMContentLoaded", function () {
  const formularioContacto = document.getElementById("contacto-form");

  if (!formularioContacto) {
    return;
  }

  const inputNombre = document.getElementById("nombre");
  const inputEmail = document.getElementById("email");
  const inputMensaje = document.getElementById("mensaje");

  const errorNombre = document.getElementById("error-nombre");
  const errorEmail = document.getElementById("error-email");
  const errorMensaje = document.getElementById("error-mensaje");
  const estadoFormulario = document.getElementById("estado-formulario");

  // Función simple para validar el formato del correo electrónico
  function esEmailValido(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }

  formularioContacto.addEventListener("submit", async function (event) {
    // Freno el envío normal para validar primero los campos con JavaScript
    event.preventDefault();

    // Limpio errores anteriores
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorMensaje.textContent = "";
    inputNombre.classList.remove("input-error");
    inputEmail.classList.remove("input-error");
    inputMensaje.classList.remove("input-error");
    estadoFormulario.textContent = "";
    estadoFormulario.className = "estado-formulario";

    let formularioValido = true;

    // Valido que el nombre no esté vacío
    if (inputNombre.value.trim() === "") {
      errorNombre.textContent = "Por favor, escribí tu nombre.";
      inputNombre.classList.add("input-error");
      formularioValido = false;
    }

    // Valido que el correo no esté vacío y tenga un formato correcto
    const valorEmail = inputEmail.value.trim();
    if (valorEmail === "") {
      errorEmail.textContent = "Por favor, escribí tu correo electrónico.";
      inputEmail.classList.add("input-error");
      formularioValido = false;
    } else if (!esEmailValido(valorEmail)) {
      errorEmail.textContent =
        "El formato del correo no es válido (ej: nombre@mail.com).";
      inputEmail.classList.add("input-error");
      formularioValido = false;
    }

    // Valido que el mensaje no esté vacío
    if (inputMensaje.value.trim() === "") {
      errorMensaje.textContent = "Por favor, escribí tu consulta o mensaje.";
      inputMensaje.classList.add("input-error");
      formularioValido = false;
    }

    if (!formularioValido) {
      estadoFormulario.textContent =
        "Revisá los campos marcados antes de enviar.";
      estadoFormulario.classList.add("estado-formulario--error");
      return;
    }

    // Si todo es válido, envío los datos a mi cuenta de Formspree usando fetch
    try {
      estadoFormulario.textContent = "Enviando tu mensaje...";

      const respuesta = await fetch("https://formspree.io/f/xljdaeob", {
        method: "POST",
        body: new FormData(formularioContacto),
        headers: {
          Accept: "application/json",
        },
      });

      if (!respuesta.ok) {
        throw new Error("Error al enviar el formulario: " + respuesta.status);
      }

      estadoFormulario.textContent =
        "¡Mensaje enviado con éxito! Te responderemos pronto.";
      estadoFormulario.classList.add("estado-formulario--exito");
      formularioContacto.reset();
    } catch (error) {
      console.error("Error al enviar con Formspree:", error);
      estadoFormulario.textContent =
        "Hubo un problema al enviar el mensaje. Intentá nuevamente más tarde.";
      estadoFormulario.classList.add("estado-formulario--error");
    }
  });
});
