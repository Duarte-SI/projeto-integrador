const mForm = document.getElementById("formulario");
const fieldEmail = document.getElementById("email");
const enviar = document.getElementById("enviar");

fieldEmail.addEventListener("keyup", function(event){
  isValidEmail = fieldEmail.checkValidity();
  if (isValidEmail) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
});

function form(event){
    event.preventDefault();
    alert("Agradecemos sua participação!");
    const ancora = document.createElement("a");
  
    const assunto = document.querySelector("#assunto");
  
    const avaliar = document.querySelector("#avaliar");
  
    const mensagem = document.querySelector(".txt-bigbox");
  
    ancora.href = "mailto:haritaaraujo@unipam.edu.br?subject=";
    ancora.href += assunto.value;
    ancora.href += "&body=Mensagem: ";
    ancora.href += mensagem.value;
    ancora.href += "%0D%0A%0D%0AEmail para contato: "
    ancora.href += fieldEmail.value;
    ancora.href += "%0D%0A%0D%0AAvaliação: ";
    ancora.href += avaliar.value;
    
    ancora.click();
  
   mForm.reset();
   enviar.disabled = true; 
}
  
enviar.onclick = form;

//%0D%0A = sequencia de caracteres usada para quebra de linha em emails via mailto