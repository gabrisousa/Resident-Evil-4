function fotoSobre() {
    let fotoSobre = document.querySelector(".leon-and-ashley");
    
    if (window.innerWidth < 768) {
      fotoSobre.src = "./src/imagens/about_bg-about-sp.jpg";

    } else {
      video.src = "./src/imagens/fundo-sobre.jp";
    }
  }

  window.addEventListener("resize", fotoSobre);
window.addEventListener("load", fotoSobre);



function fotoHistoria() {
  let fotoHistoria = document.querySelector(".historia");
  
  if (window.innerWidth < 768) {
    fotoHistoria.src = "./src/imagens/about_bg-story-sp.jpg";

  } else {
    fotoHistoria.src = "./src/imagens/history.png";
  }
}

window.addEventListener("resize", fotoHistoria);
window.addEventListener("load", fotoHistoria);


