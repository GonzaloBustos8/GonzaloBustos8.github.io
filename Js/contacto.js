const nombre = document.getElementById("name");
const mail = document.getElementById("mail");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const form = document.querySelector("form");
const parrafo = document.querySelector(".warning");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warning = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexTel = /^[1-9]\d{9}$/;
  let msj = mensaje.value;

  if (nombre.value.length < 6) {
    warning += "Nombre NO valido. <br>";
    entrar = true;
  }
  if (!regexEmail.test(mail.value)) {
    warning += "Email NO valido <br>";
    entrar = true;
  }
  if (!regexTel.test(telefono.value)) {
    warning += "Telefono NO valido. <br>";
    entrar = true;
  }
  if (mensaje.value.length == 0) {
    warning += "Mensaje vacio. <br>";
    entrar = true;
  }
  if (msj.length > 200) {
    warning += "El limite de caracteres es 200 <br>";
    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = warning;
  } else {
    form.style.display = "none";
    //crear createElement que muestre el mensaje enviado

    const texto = document.createElement("p");
    texto.innerHTML = "Mensaje enviado: <br><br>" + mensaje.value;

    document.getElementById("contacto").appendChild(texto);
  }
});
