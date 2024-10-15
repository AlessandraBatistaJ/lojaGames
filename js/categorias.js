// categorias.js

// Selecionar todas as imagens dentro dos itens de home
let categoriaImages = document.querySelectorAll('.categoria-item img');
let lancamentoImages = document.querySelectorAll('.lancamento-item img');

// Função para adicionar a classe de animação
function addAnimation(event) {
event.target.classList.add('animate');
}

// Função para remover a classe de animação
function removeAnimation(event) {
event.target.classList.remove('animate');
}

// Adicionar event listeners para cada imagem
categoriaImages.forEach((categoriaItem) => {
categoriaItem.addEventListener('mouseenter', addAnimation);
categoriaItem.addEventListener('mouseleave', removeAnimation);
});

lancamentoImages.forEach((lancamentoItem) => {
    lancamentoItem.addEventListener('mouseenter', addAnimation);
    lancamentoItem.addEventListener('mouseleave', removeAnimation);
});    
