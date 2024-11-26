document.addEventListener('scroll', function() {
    const whatsappButton = document.querySelector('.float-btn-whats-container');
    const inicialSection = document.querySelector('.inicial');
    const sectionTop = inicialSection.offsetHeight;

    if (window.scrollY > sectionTop) {
        whatsappButton.classList.add('visible'); 
    } else {
        whatsappButton.classList.remove('visible'); 
    }
});
