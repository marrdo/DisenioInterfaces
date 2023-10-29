"use strict";
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