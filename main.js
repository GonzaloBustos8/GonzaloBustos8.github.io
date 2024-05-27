const nombre= document.querySelector(".input-usuario");
const mail= document.querySelector(".input-email");
const password = document.querySelector(".input-password");
const form = document.querySelector("form");
const parrafo = document.querySelector(".warning");
const boton= document.querySelector(".login-button");

form.addEventListener("submit",e =>{
    e.preventDefault();
    let warning="";
    let entrar=false;
    let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length < 6){
        warning+="El usuario no es valido <br>";
        entrar=true;
    }
    if(!regexEmail.test(mail.value)){
        warning+="El email no es valido <br>"
        entrar=true;

    }
    if(password.value.length < 8){
        warning+="La contraseña no es valida <br>";
        entrar=true;
    }
    if(entrar){
        parrafo.innerHTML=warning;
    }else{
        parrafo.innerHTML="envviado"
        window.location.href = './navegador.html';

    }

})
