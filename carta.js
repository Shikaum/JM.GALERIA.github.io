document.addEventListener("DOMContentLoaded", () => {
    const music2 = document.querySelector("#music2");
    const soundControl2 = document.querySelector("#soundControl2");

    if (music2 && soundControl2) {
        soundControl2.addEventListener("click", () => {
            if (music2.paused || music2.muted) {
                music2.muted = false;
                music2.play();
                soundControl2.textContent = "🎵"; // Som ligado
            } else {
                music2.pause();
                music2.muted = true;
                soundControl2.textContent = "🔇"; // Som desligado
            }
        });
    } else {
        console.log("Elementos de áudio não encontrados!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");
    document.body.appendChild(starsContainer);

    const colors = ["#ff80ab", "#ffa07a", "#f8f8ff", "#add8e6", "#ffeb3b"]; // Cores diferentes

    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 3 + 2 + "s"; // Variação no tempo da animação
        star.style.background = colors[Math.floor(Math.random() * colors.length)]; // Cor inicial aleatória
        starsContainer.appendChild(star);
    }
});

