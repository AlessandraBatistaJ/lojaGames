// Função para carregar o header e o footer em qualquer página que incluir este script
function loadComponents() {
    // Carregar o header
    fetch('/html/components/header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar o header:', error));

    // Carregar o footer
    fetch('/html/components/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar o footer:', error));
}

// Executa a função assim que o DOM estiver carregado
document.addEventListener('DOMContentLoaded', loadComponents);
