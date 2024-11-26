document.addEventListener('DOMContentLoaded', ()=>{
    new TypeIt(".second-text", {
        speed: 150,
        loop: true
    }).type('Desenvolvedor web.', {delay: 900}).delete(18).type('FreeLancer.', {delay: 900}).delete(11)
    .type('Técnico em Informática.',{delay: 900}).delete(23).type('Estudante.',{delay: 900}).delete(10).type('Gamer.',{delay: 900})

    .go()
})