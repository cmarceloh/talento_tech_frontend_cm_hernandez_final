# Pizzarella
## Pizzería Artesanal · Proyecto Final

Este proyecto tiene un propósito especial: quiero regalárselo a una amiga que tiene una pizzería y todavía no tiene una página web. Cuando lo termine, la idea es comprarle un dominio en NIC y publicar el sitio en Vercel o Netlify para regalárselo. Así, además de poner en práctica lo que voy aprendiendo, puedo darle una mano a alguien.

---

## Evolución del proyecto

### Primera entrega · Pre-entrega

En la primera etapa armé la base visual y estructural del sitio con HTML semántico y CSS externo:

- Maquetado de las páginas principales (`index.html`, `pages/sobreNosotros.html` y `pages/contacto.html`).
- Diseño responsivo con Google Fonts (`Poppins`), Flexbox para las tarjetas de productos, CSS Grid para reseñas y Media Queries para celulares y tablets.
- Menú de navegación responsive e integración inicial del formulario de contacto con Formspree.

### Entrega final · Proyecto Final

En esta entrega final el sitio pasó de ser una página estática a un **e-commerce dinámico e interactivo**, usando JavaScript puro (sin frameworks) y módulos separados dentro de `js/`:

- **Carga dinámica de productos con Fetch API:** Las pizzas se leen de forma asincrónica desde `data/productos.json` y se renderizan dinámicamente en el DOM.
- **Carrito de compras interactivo (`pages/carrito.html`):** Permite agregar pizzas, ver el contador en tiempo real, modificar cantidades, eliminar productos, vaciar el carrito y simular la compra.
- **Persistencia con `localStorage`:** El estado del carrito queda guardado en el navegador al recargar o cerrar la página.
- **Validación del formulario con JavaScript:** Se validan los campos obligatorios y el formato del correo antes de enviar la consulta a Formspree.
- **Accesibilidad y SEO:** Metaetiquetas, atributos `alt` descriptivos y navegación accesible por teclado.

---

## Estructura del proyecto

- `index.html`: página principal y carta dinámica de pizzas.
- `pages/carrito.html`: carrito de compras.
- `pages/sobreNosotros.html`: información sobre la pizzería y video del proceso de elaboración.
- `pages/contacto.html`: formulario de contacto, ubicación y horarios.
- `css/styles.css`: estilos y diseño responsivo.
- `data/productos.json`: catálogo local de pizzas.
- `js/storage.js`: manejo de `localStorage`.
- `js/ui.js`: menú hamburguesa y contador del carrito.
- `js/funcionesCarrito.js`: funciones para gestionar productos del carrito.
- `js/index.js`: carga y renderizado de productos.
- `js/carrito.js`: interactividad de la página del carrito.
- `js/contacto.js`: validación y envío del formulario.
- `img/` y `video/`: recursos multimedia.

---

## Formulario de contacto

El formulario permite enviar nombre, correo electrónico y mensaje. Los datos se validan con JavaScript antes de enviarse a Formspree mediante `fetch`.

[Formulario de contacto en Formspree](https://formspree.io/f/xljdaeob)

---

## Despliegue

En GitHub Pages:

[https://cmarceloh.github.io/talento_tech_frontend_cm_hernandez_final/](https://cmarceloh.github.io/talento_tech_frontend_cm_hernandez_final/)

Alternativo Vercel:

[https://talentotechfrontendcmhernandezfinal.vercel.app/](https://talentotechfrontendcmhernandezfinal.vercel.app/)
