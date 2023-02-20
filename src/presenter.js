import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar");
const div = document.querySelector("#saludador");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "Hola " + nombre.value;
});
