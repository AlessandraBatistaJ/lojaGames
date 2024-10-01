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


document.addEventListener('DOMContentLoaded', function () {
    const promoItems = document.querySelectorAll('.promocoes-item');

    promoItems.forEach((item) => {
        item.addEventListener('click', function () {
            // Obter o ID do jogo clicado
            const gameId = this.getAttribute('data-id');

            // Redirecionar o usuário para a página do jogo correspondente
            window.location.href = `game.html?gameId=${gameId}`;
        });
    });
});
