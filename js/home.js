// home.js

// Selecionar todas as imagens dentro dos itens de home
let homeImages = document.querySelectorAll('.containerFigure img');

// Função para adicionar a classe de animação
function addAnimation(event) {
event.target.classList.add('animate');
}

// Função para remover a classe de animação
function removeAnimation(event) {
event.target.classList.remove('animate');
}

// Adicionar event listeners para cada imagem
homeImages.forEach((img) => {
img.addEventListener('mouseenter', addAnimation);
img.addEventListener('mouseleave', removeAnimation);
});
