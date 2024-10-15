// Validação do e-mail
let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

// Validação ao digitar no campo de e-mail
emailInput.addEventListener("input", function(event) {
    let valor = event.target.value;

    if (valor.includes('@') && valor.includes('.com')) {
        emailInput.classList.add("correct");
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
    } else if (valor.length > 0) {
        emailInput.classList.add("error");
        emailInput.classList.remove("correct");
        emailHelper.innerText = "E-mail inválido";
        emailHelper.classList.add("visible");
    } else {
        emailInput.classList.remove("error");
        emailInput.classList.remove("correct");
        emailHelper.classList.remove("visible");
    }
});

// Adicionar evento blur para garantir o retorno ao estilo neutro se o campo estiver vazio
emailInput.addEventListener("blur", function() {
    if (emailInput.value === "") {
        emailInput.classList.remove("error");
        emailInput.classList.remove("correct");
        emailHelper.classList.remove("visible");
    }
});

// Validação da senha
let senhaInput = document.getElementById("senha");
let senhaHelper = document.getElementById("senha-helper");

// Validação ao digitar no campo de senha
senhaInput.addEventListener("input", function(event) {
    let valor = event.target.value;

    // Regras de validação da senha - Mínimo de 8 caracteres
    if (valor.length >= 8) {
        senhaInput.classList.add("correct");
        senhaInput.classList.remove("error");
        senhaHelper.classList.remove("visible");
    } else if (valor.length > 0) {
        senhaInput.classList.add("error");
        senhaInput.classList.remove("correct");
        senhaHelper.innerText = "Senha deve ter pelo menos 8 caracteres";
        senhaHelper.classList.add("visible");
    } else {
        senhaInput.classList.remove("error");
        senhaInput.classList.remove("correct");
        senhaHelper.classList.remove("visible");
    }
});

// Adicionar evento blur para garantir o retorno ao estilo neutro se o campo estiver vazio
senhaInput.addEventListener("blur", function() {
    if (senhaInput.value === "") {
        senhaInput.classList.remove("error");
        senhaInput.classList.remove("correct");
        senhaHelper.classList.remove("visible");
    }
});

// cadastro.js

// Selecionar todas as imagens dentro dos itens de home
let redesImages = document.querySelectorAll('.itens img');

// Função para adicionar a classe de animação
function addAnimation(event) {
event.target.classList.add('animate');
}

// Função para remover a classe de animação
function removeAnimation(event) {
event.target.classList.remove('animate');
}

// Adicionar event listeners para cada imagem
redesImages.forEach((img) => {
img.addEventListener('mouseenter', addAnimation);
img.addEventListener('mouseleave', removeAnimation);
});



