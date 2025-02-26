// Navegação entre páginas
function navigate(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Razões pelas que eu te amo
const reasons = [
    "Porque você me faz sorrir todos os dias.",
    "Porque seu abraço é o meu lugar favorito.",
    "Porque você é a pessoa mais incrível que eu já conheci.",
    "Porque seu amor me completa.",
    "Porque você é a minha melhor amiga e meu grande amor."
];

function showReason() {
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById('reason-text').textContent = randomReason;
}

// Tocar música de fundo (opcional)

window.onload = function() {
    const music = document.getElementById('background-music');
    music.play();
};