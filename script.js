document.addEventListener("DOMContentLoaded", function() {
    // Efeito de digitação no título
    const titulo = document.querySelector("h1");
    const texto = titulo.textContent;
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

    // Marcar link ativo na navegação
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Remover funcionalidade de esconder barra de navegação
    // Mostrar barra de navegação ao rolar para cima
    let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop < lastScrollTop) {
            document.querySelector("header").style.display = "block";
        }
        lastScrollTop = scrollTop;
    });
});
