
const btnInicio = document.getElementById("btn-inicio");

// Verifica se o usuário está na seção top-site
if (document.querySelector("#inicio").classList.contains("hidden")) {
  // Se não estiver, mostra o botão
  btnInicio.classList.remove("hidden"); // Utiliza classList para manipular classes CSS
} else {
  // Se estiver, oculta o botão
  btnInicio.classList.add("hidden");
}


