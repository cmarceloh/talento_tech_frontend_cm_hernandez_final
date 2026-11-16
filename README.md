# Pizzarella - Pizzería Artesanal (Entrega Final)

Este proyecto tiene un propósito especial: quiero regalárselo a una amiga que tiene una pizzería y todavía no tiene una página web. Cuando lo termine, la idea es comprarle un dominio en NIC y publicar el sitio en Vercel o Netlify para regalárselo. Así, además de poner en práctica lo que voy aprendiendo, puedo darle una mano a alguien.

## Evolución del proyecto (Primera Entrega vs. Entrega Final)

### Primera entrega (Pre-entrega)
En la primera etapa armé la base visual y estructural del sitio con HTML semántico y CSS externo:
- Maquetado de las páginas principales (`index.html`, `pages/sobreNosotros.html` y `pages/contacto.html`).
- Diseño responsivo con Google Fonts (`Poppins`), Flexbox para las tarjetas de productos, CSS Grid para reseñas y Media Queries para celulares y tablets.
- Menú de navegación responsive e integración inicial del formulario de contacto con Formspree.

### Segunda y última entrega (Proyecto Final)
En esta entrega final el sitio pasó de ser una página estática a un **e-commerce dinámico e interactivo** usando JavaScript puro (sin frameworks), separado en módulos claros dentro de la carpeta `js/`:
- **Carga dinámica de productos con Fetch API**: Las pizzas ahora se leen de forma asincrónica desde `data/productos.json` y se renderizan dinámicamente en el DOM.
- **Carrito de compras interactivo (`pages/carrito.html`)**: Permite agregar pizzas desde el menú, ver el contador en tiempo real en la barra de navegación, sumar o restar cantidades, eliminar productos, vaciar el carrito y simular la compra.
- **Persistencia con `localStorage`**: El estado del carrito queda guardado en el navegador para no perderse al recargar o cerrar la página.
- **Validación del formulario con JavaScript**: Validación de campos obligatorios y formato de correo electrónico antes de enviar la consulta a Formspree.
- **Accesibilidad y SEO**: Metaetiquetas en el `<head>`, atributos `alt` descriptivos en todas las imágenes y navegación accesible por teclado.

## Contenido del proyecto

- `index.html`: página principal y carta dinámica de pizzas.
- `pages/carrito.html`: vista del carrito de compras para editar cantidades, eliminar productos y finalizar la compra.
- `pages/sobreNosotros.html`: información sobre la pizzería y video del proceso de elaboración.
- `pages/contacto.html`: formulario de contacto validado y datos de ubicación y horarios.
- `css/styles.css`: estilos del sitio y diseño responsivo.
- `data/productos.json`: catálogo local de pizzas consumido con `fetch`.
- `js/storage.js`: manejo de `localStorage` (`obtenerCarrito`, `guardarCarrito`, `vaciarCarritoStorage`).
- `js/ui.js`: menú hamburguesa accesible y actualización del contador del carrito en la barra de navegación.
- `js/funcionesCarrito.js`: funciones para agregar, modificar cantidades, eliminar y vaciar el carrito.
- `js/index.js`: consumo de `data/productos.json` con `fetch` (`async/await`) y renderizado de tarjetas en el DOM.
- `js/carrito.js`: renderizado e interactividad de la página `pages/carrito.html`.
- `js/contacto.js`: validación en JavaScript y envío del formulario a Formspree.
- `img/` y `video/`: recursos multimedia.

## Formulario de contacto

El formulario permite enviar nombre, correo electrónico y mensaje, validando los datos con JavaScript antes de enviarlos a Formspree mediante `fetch`:

https://formspree.io/f/xljdaeob

## Despliegue en Vercel

Podés ver la versión final del sitio publicada en el siguiente enlace:

https://pizzarella-tu-usuario.vercel.app
