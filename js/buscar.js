// buscar.js

// Selecionar todas as imagens dentro dos itens de promoção
const caixasBuscar = document.querySelectorAll('.aside-item');

// Função para adicionar a classe de animação
function addAnimation(event) {
    event.target.classList.add('animate');
}

// Função para remover a classe de animação
function removeAnimation(event) {
    event.target.classList.remove('animate');
}

// Adicionar event listeners para cada imagem
caixasBuscar.forEach((asideItem) => {
   asideItem.addEventListener('mouseenter', addAnimation);
   asideItem.addEventListener('mouseleave', removeAnimation);
});

