document.addEventListener('DOMContentLoaded', function () {
    // Extrair o ID do jogo da URL
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('gameId');

    // Selecionar o container do jogo
    const gameContainer = document.getElementById('game-container');

    // Definir URLs dos minigames (URLs reais de jogos gratuitos)
    const games = {
        hexgl: 'http://hexgl.bkcore.com/play/', // Snake Game real
        pacMan: 'https://www.crazygames.com/embed/pacman', // Pac-Man gratuito de CrazyGames
        jetrush: 'https://www.crazygames.com/embed/jet-rush' // Victory Run gratuito de Retro Games
    };

    // Se o gameId for válido, criar o iframe e carregar o jogo
    if (games[gameId]) {
        const iframe = document.createElement('iframe');
        iframe.src = games[gameId];
        iframe.width = '100%';
        iframe.height = '600px';
        iframe.frameBorder = '0';
        iframe.allow = 'fullscreen';

        // Adiciona o iframe ao container do jogo
        gameContainer.appendChild(iframe);
    } else {
        // Caso não haja jogo correspondente, exibir uma mensagem de erro
        gameContainer.innerHTML = '<p>Jogo não encontrado. Por favor, volte e escolha um jogo válido.</p>';
    }
});
