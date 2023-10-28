/*Manejar la animacion de escritura*/

// Función para manejar la animación
function manejarAnimacion(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // La sección es visible en la pantalla, inicia la animación
      entry.target.querySelectorAll('span').forEach((span, index) => {
        span.style.animationPlayState = 'running';
      });
    } else {
      // La sección ya no es visible, pausa la animación
      entry.target.querySelectorAll('span').forEach((span, index) => {
        span.style.animationPlayState = 'paused';
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

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});