document.addEventListener('DOMContentLoaded', () => {
    const underline = document.querySelector('.underline');

    // Adiciona uma classe para iniciar a animação
    underline.classList.add('slide-in');
});

// Opcional: você pode remover a animação depois de um tempo, se quiser
setTimeout(() => {
    const underline = document.querySelector('.underline');
    underline.classList.remove('slide-in');
}, 2000); // Remove a classe após 2 segundos