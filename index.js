// Efeito de hover nos cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Modal para exibir imagens ampliadas
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Abre o modal ao clicar em um card
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Fecha o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Controle de som para a página de fotos (index.html)
const soundControl1 = document.querySelector('#soundControl');
const music1 = document.querySelector('#music');

if (soundControl1 && music1) {
    soundControl1.addEventListener('click', () => {
        if (music1.paused || music1.muted) {
            music1.play(); // Toca a música
            music1.muted = false; // Desativa o mudo
            soundControl1.textContent = '🎵'; // Emoji de som tocando
        } else {
            music1.pause(); // Pausa a música
            music1.muted = true; // Ativa o mudo
            soundControl1.textContent = '🔇'; // Emoji de som silenciado
        }
    });
}