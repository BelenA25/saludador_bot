import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar");
const sexo = document.querySelector("#box1")
const div = document.querySelector("#saludador");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (sexo.value == "masculino")
  {
    div.innerHTML = "Hola señor " +  nombre.value;
  }
  else
  {
    div.innerHTML = "Hola señora " +  nombre.value;
  }
});
