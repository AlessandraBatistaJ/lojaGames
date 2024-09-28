// Validação do e-mail
let emailInput = document.getElementById("email")
let emailHelper = document.getElementById("email-helper")
// Validação da senha
let senhaInput = document.getElementById("senha")
let senhaHelper = document.getElementById("senha-helper")


// Ocultar mensagem de erro quando o e-mail estiver correto
emailInput.addEventListener("input", function(event) {
    let valor = event.target.value;
    if (valor.includes('@') && valor.includes('.com')) {
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.innerText = "";
    } else {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "E-mail inválido";
        emailHelper.classList.add("visible")
    }
});
// Ocultar mensagem de erro quando a senha estiver correta
senhaInput.addEventListener("input", function(event) {
    let valor = event.target.value
    // Regras de validação da senha - Mínimo de 8 caracteres
    if (valor.length >= 8) {
        senhaInput.classList.add("correct")
        senhaInput.classList.remove("error")
        senhaHelper.innerText = "";
    } else {
        senhaInput.classList.remove("correct")
        senhaInput.classList.add("error")
        senhaHelper.innerText = "Senha deve ter pelo menos 8 caracteres"
        senhaHelper.classList.add("visible")
    }
})