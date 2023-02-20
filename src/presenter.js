import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar");
const sexo = document.querySelector("#box1")
const div = document.querySelector("#saludador");
const edad = document.querySelector("#edad")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (sexo.value == "masculino")
  {
    if (edad.value >30)
    {
      div.innerHTML = "Hola señor " +  nombre.value;
    }
    else
    {
      div.innerHTML = "Hola joven " +  nombre.value;
    }
  }
  else
  {
    if (edad.value>30)
    {
      div.innerHTML = "Hola señora " +  nombre.value;
    }
    else
    {
      div.innerHTML = "Hola señorita " +  nombre.value;
    }
  }
});
