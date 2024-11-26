document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.container-nav .navi-tens a');

    // Adiciona a classe 'active' ao link clicado e remove dos outros
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (this.getAttribute('href') === '#home') {
                // Remove a classe 'active' de todos os links se o link Home for clicado
                navLinks.forEach(link => link.classList.remove('active'));
            } else {
                // Adiciona a classe 'active' ao link clicado
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Atualiza a classe 'active' com base na rolagem da página
    function updateActiveLink() {
        const currentHash = window.location.hash;
        const activeLink = document.querySelector(`.container-nav a[href="${currentHash}"]`);

        if (activeLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        }
    }

    // Verifica a URL hash ao carregar a página
    window.addEventListener('load', updateActiveLink);

    // Atualiza o link ativo com base na rolagem da página
    window.addEventListener('scroll', updateActiveLink);
});