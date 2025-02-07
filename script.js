document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Seleciona o modal e os elementos internos
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

// Verifica se existe o controle de som e o áudio para cada página
const soundControl1 = document.querySelector('#soundControl');  // Página de fotos
const music1 = document.querySelector('#music');  // Áudio da página de fotos

const soundControl2 = document.querySelector('#soundControl2');  // Página de carta
const music2 = document.querySelector('#music2');  // Áudio da página de carta

// Função para alternar entre play e mute para o primeiro áudio
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

// Função para alternar entre play e mute para o segundo áudio
if (soundControl2 && music2) {
    soundControl2.addEventListener('click', () => {
        if (music2.paused || music2.muted) {
            music2.play(); // Toca a música
            music2.muted = false; // Desativa o mudo
            soundControl2.textContent = '🎵'; // Emoji de som tocando
        } else {
            music2.pause(); // Pausa a música
            music2.muted = true; // Ativa o mudo
            soundControl2.textContent = '🔇'; // Emoji de som silenciado
        }
    });
}




