const hamburgMenu = document.querySelector("#burger");

function toggleMenu(event) {
    if(event.type ==='toucchstart') event.preventDefault();
    const nav = document.querySelector("#nav");
    nav.classList.toggle('active');
    const isActive = nav.classList.contains('active');
    event.currentTarget.setAttribute("aria-expanded", isActive ? "true" : "false");
    if(isActive){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}



const menuLinks = document.querySelectorAll('#menu a');
const logoSite = document.querySelectorAll(".logo a img")


function closeMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.remove('active');
  hamburgMenu.checked = false;
}


menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
logoSite.forEach(logo => {
  logo.addEventListener('click', () => {
    closeMenu();
  });
});

hamburgMenu.addEventListener("click", toggleMenu);
hamburgMenu.addEventListener("touchstart", toggleMenu);
