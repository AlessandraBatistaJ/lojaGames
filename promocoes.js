// promocoes.js

// Selecionar todas as imagens dentro dos itens de promoção
const promoImages = document.querySelectorAll('.promocoes-item img');

// Função para adicionar a classe de animação
function addAnimation(event) {
    event.target.classList.add('animate');
}

// Função para remover a classe de animação
function removeAnimation(event) {
    event.target.classList.remove('animate');
}

// Adicionar event listeners para cada imagem
promoImages.forEach((img) => {
    img.addEventListener('mouseenter', addAnimation);
    img.addEventListener('mouseleave', removeAnimation);
});
