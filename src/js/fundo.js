window.addEventListener("scroll", function () {
    let targetDiv = document.getElementById("caixa-sobre");
    let targetPosition = targetDiv.getBoundingClientRect().top; // Posição da div em relação à viewport
    let windowHeight = window.innerHeight; // Altura da tela do usuário
    let a = document.querySelector(".video-fundo");

    if (targetPosition < windowHeight / 2) { // Quando metade da div estiver visível
        document.style.display = "block";
    } else {
        document.style.display ="none";
    }
});