/*Manejar la animacion de escritura*/

// Función para manejar la animación
function manejarAnimacion(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // La sección es visible en la pantalla, inicia la animación
      entry.target.querySelectorAll("span").forEach((span, index) => {
        span.style.animationPlayState = "running";
      });
    } else {
      // La sección ya no es visible, pausa la animación
      entry.target.querySelectorAll("span").forEach((span, index) => {
        span.style.animationPlayState = "paused";
      });
    }
  });
}
// Seleccionar la sección con la clase "animacion-prog"
const seccionAnimacion = document.querySelector(".animacion-prog");

// Crear el observador
const observer = new IntersectionObserver(manejarAnimacion, {
  root: null, // El área de observación es el viewport
  rootMargin: "0px", // Márgenes adicionales alrededor del área de observación
  threshold: 0.5, // Porcentaje de visibilidad necesario para activar la animación
});

// Observar la sección
observer.observe(seccionAnimacion);

/*MENU HAMBURGUESA*/
// Selecciones para Barra de navegación hamburguesa

const burger = document.querySelector("#menu-hamburguesa");
const navegacion = document.querySelector(".navegacion");

burger.addEventListener("click", () => {
  navegacion.classList.toggle("show");
});

// Cerrar el menú de hambuguesa cuando se hace click en un enlace

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navegacion.classList.remove("show");
  })
);

/*MODOS CLARO/OSCURO*/
const btnLuna = document.querySelector("#modes");
const body = document.querySelector("body");
btnLuna.addEventListener("click", () => {
  body.classList.toggle("claro");
});
