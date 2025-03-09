function fotoSobre() {
    let fotoSobre = document.querySelector(".leon-and-ashley");
    
    if (window.innerWidth < 1000) {
      fotoSobre.src = "./src/imagens/about_bg-about-sp.jpg";

    } else {
      fotoSobre.src = "./src/imagens/fundo-sobre.jpg";
    }
  }

  window.addEventListener("resize", fotoSobre);
window.addEventListener("load", fotoSobre);



// function fotoHistoria() {
//   let fotoHistoria = document.querySelector(".historia");
  
//   if (window.innerWidth < 1000) {
//     fotoHistoria.src = "./src/imagens/about_bg-story-sp.jpg";

//   } else {
//     fotoHistoria.src = "./src/imagens/history.png";
//   }
// }

// window.addEventListener("resize", fotoHistoria);
// window.addEventListener("load", fotoHistoria);



// function fotoLeonBio() {
//   let fotoLeonBio = document.getElementById("image1");
  
//   if (window.innerWidth < 1000) {
//     fotoLeonBio.src = "./src/imagens/leon-biography-responsivo.jpg";

//   } else {
//     fotoLeonBio.src = "./src/imagens/leon-biography.jpg";
//   }
// }

// window.addEventListener("resize", fotoLeonBio);
// window.addEventListener("load", fotoLeonBio);

