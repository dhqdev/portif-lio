document.addEventListener("DOMContentLoaded", function() {
    // Efeito de digitação no título
    const titulo = document.querySelector("h1");
    const texto = "🚀 Bem-vindo ao meu Portfólio Futurista! 🌌";
    let index = 0;

    function digitar() {
        if (index < texto.length) {
            titulo.innerHTML += texto.charAt(index);
            index++;
            setTimeout(digitar, 100);
        }
    }
    titulo.innerHTML = "";
    digitar();

    // Efeito de brilho nos projetos ao passar o mouse
    const projetos = document.querySelectorAll(".projeto");
    projetos.forEach(projeto => {
        projeto.addEventListener("mouseover", function() {
            projeto.style.boxShadow = "0 0 25px #ff00ff";
        });
        projeto.addEventListener("mouseout", function() {
            projeto.style.boxShadow = "0 0 15px #6a0dad";
        });
    });
});
