// Funções gerais
function togglePopup(input, label) {
    // Mostrar que campo é obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    })

    // Ocultar campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup")
    })
}

function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible")
    input.classList.remove("error")
    input.classList.add("correct")
}

function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible")
    input.classList.add("error")
    input.classList.remove("correct")
}

// Validação de e-mail
let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

// Chamar função para habilitar popup do e-mail
togglePopup(emailInput, emailLabel)


emailInput.addEventListener("change", function(evento) {
    let valor = evento.target.value

    if(valor.includes('@') && valor.includes('.com')) {
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")
    } else {
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.innerText = "E-mail inválido"
        emailHelper.classList.add("visible")
    }
})

//validação senha
let senhaInput = document.getElementById("senha")
let senhaLabel = document.querySelector('label[for="senha"]')
let senhaHelper = document.getElementById("senha-helper")

togglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener("change", function(evento) {
    let valor = evento.target.value;

    // Regras de validação da senha- Mínimo de 8 caracteres
    if (valor.length >= 8) {
        senhaInput.classList.add("correct")
        senhaInput.classList.remove("error")
        senhaHelper.classList.remove("visible")
    } else {
        senhaInput.classList.remove("correct")
        senhaInput.classList.add("error")
        senhaHelper.innerText = "Senha deve ter pelo menos 8 caracteres"
        senhaHelper.classList.add("visible")
    }
})




