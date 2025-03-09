function FotoSobre() {
    let fotoSobre = document.querySelector(".leon-and-ashley");
    
    if (window.innerWidth < 768) {
      fotoSobre.src = "./src/imagens/about_bg-about-sp.jpg";

    } else {
      fotoSobre.src = "./src/imagens/fundo-sobre.jpg";
    }
  }

  window.addEventListener("resize", FotoSobre);
window.addEventListener("load", FotoSobre);



function FotoHistoria() {
  let fotoHistoria = document.querySelector(".historia");
  
  if (window.innerWidth < 768) {
    fotoHistoria.src = "./src/imagens/about_bg-story-sp.jpg";

  } else {
    fotoHistoria.src = "./src/imagens/history.png";
  }
}

window.addEventListener("resize", FotoHistoria);
window.addEventListener("load", FotoHistoria);



function FotoLeonBio() {
  let fotoLeonBio = document.getElementById("image1");
  
  if (window.innerWidth < 768) {
    fotoLeonBio.src = "./src/imagens/leon-biography-responsivo.jpg";

  } else {
    fotoLeonBio.src = "./src/imagens/leon-biography.jpg";
  }
}

window.addEventListener("resize", FotoLeonBio);
window.addEventListener("load", FotoLeonBio);


function FotoLeonBio() {
  let fotoLeonBio = document.getElementById("image1");
  let fotoLeonBio2 = document.getElementById("image2");
  
  if (window.innerWidth < 768) {
    fotoLeonBio.src = "./src/imagens/leon-biography-responsivo.jpg";
    fotoLeonBio2.src = "./src/imagens/leon-biography2-responsivo.jpg";

  } else {
    fotoLeonBio.src = "./src/imagens/leon-biography.jpg";
    fotoLeonBio2.src = "./src/imagens/leon-biography2.jpg";
  }
}

window.addEventListener("resize", FotoLeonBio);
window.addEventListener("load", FotoLeonBio);


