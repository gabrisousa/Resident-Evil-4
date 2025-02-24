



function clicarbotao1 () {
    let video1 = document.querySelector("caixa-camera");

    document.querySelector(".caixa-camera").style.display = "block";
    document.querySelector(".caixa-combate").style.display = "none";
    document.querySelector(".caixa-faca").style.display = "none";


    document.querySelector(".botoes1-videos").style.backgroundColor = "rgb(187, 16, 32)";
    document.querySelector(".botoes2-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes3-videos").style.backgroundColor = "rgb(93, 11, 19)";
    


    document.querySelector(".botoes2-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes1-videos").style.transform = "scaley(1.5)";
    document.querySelector(".botoes3-videos").style.transform = "scaley(1)";
       

    



    

}






function playVideoCamera () {
    let videoCamera = document.getElementById('VideoCamera');
    videoCamera.play();
    document.querySelector(".thumb-camera-video").style.display = "none";
    document.querySelector(".botao-video-camera").style.display = "none";
    document.querySelector(".imagem-nene").style.display = "block" ;                   
}





function clicarbotao2 () {
    
    let video2 = document.querySelector("caixa-combate");
    document.querySelector(".caixa-combate").style.display = "block";
    document.querySelector(".caixa-camera").style.display = "none";
    document.querySelector(".caixa-faca").style.display = "none";


    document.querySelector(".botoes2-videos").style.backgroundColor = "rgb(187, 16, 32)";
    document.querySelector(".botoes1-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes3-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes1-videos").style.backgroundColor = "rgb(93, 11, 19)";


    document.querySelector(".botoes2-videos").style.transform = "scaley(1.5)";
    document.querySelector(".botoes1-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes3-videos").style.transform = "scaley(1)";
   



    

}







function playVideoCombate () {
    let videoCombate = document.getElementById('VideoCombate');
    videoCombate.play();
    document.querySelector(".thumb-combate-video").style.display = "none";
    document.querySelector(".botao-video-combate").style.display = "none";
    document.querySelector(".caixa-faca").style.display = "none";
                
}





function clicarbotao3 () {
    
    let video3 = document.querySelector("caixa-faca");
    document.querySelector(".caixa-faca").style.display = "block";
    document.querySelector(".caixa-camera").style.display = "none";
    document.querySelector(".caixa-combate").style.display = "none";

    document.querySelector(".botoes3-videos").style.backgroundColor = "rgb(187, 16, 32)";
    document.querySelector(".botoes2-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes1-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes1-videos").style.backgroundColor = "rgb(93, 11, 19)";

    document.querySelector(".botoes3-videos").style.transform = "scaley(1.5)";
    document.querySelector(".botoes2-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes1-videos").style.transform = "scaley(1)";
   



    

}



function playVideoFaca () {
    let videoFaca = document.getElementById('VideoFaca');
    videoFaca.play();
    document.querySelector(".thumb-faca-video").style.display = "none";
    document.querySelector(".botao-video-faca").style.display = "none";
                
}




function clicarbotao4 () {
    let video4 = document.querySelector("caixa-maleta");
    document.querySelector(".caixa-maleta").style.display = "block";
    document.querySelector(".caixa-criação").style.display = "none";
    document.querySelector(".caixa-mercador").style.display = "none";
    document.querySelector(".caixa-negociação").style.display = "none";


    document.querySelector(".botoes5-videos").style.backgroundColor = "rgb(187, 16, 32)";
    document.querySelector(".botoes8-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes7-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes6-videos").style.backgroundColor = "rgb(93, 11, 19)";

    document.querySelector(".botoes5-videos").style.transform = "scaley(1.5)";
    document.querySelector(".botoes6-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes7-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes8-videos").style.transform = "scaley(1)";

    
    
    
   



    

}



function playVideoMaleta () {
    let videoMaleta = document.getElementById('VideoMaleta');
    videoMaleta.play();
    document.querySelector(".thumb-maleta-video").style.display = "none";
    document.querySelector(".botao-video-maleta").style.display = "none";
                
}




function clicarbotao5 () {
    let video5 = document.querySelector("caixa-criação");
    document.querySelector(".caixa-maleta").style.display = "none";
    document.querySelector(".caixa-criação").style.display = "block";
    document.querySelector(".caixa-mercador").style.display = "none";
    document.querySelector(".caixa-negociação").style.display = "none";

    document.querySelector(".botoes6-videos").style.backgroundColor = "rgb(187, 16, 32)";
    document.querySelector(".botoes8-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes5-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes7-videos").style.backgroundColor = "rgb(93, 11, 19)";

    document.querySelector(".botoes6-videos").style.transform = "scaley(1.5)";
    document.querySelector(".botoes5-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes7-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes8-videos").style.transform = "scaley(1)";
   
    

    
    
    
   



    

}


function playVideoCriação () {
    let videoCriação = document.getElementById('VideoCriação');
    videoCriação.play();
    document.querySelector(".thumb-criação-video").style.display = "none";
    document.querySelector(".botao-video-criação").style.display = "none";
                
}



function clicarbotao6 () {
    let video5 = document.querySelector("caixa-mercador");
    document.querySelector(".caixa-maleta").style.display = "none";
    document.querySelector(".caixa-criação").style.display = "none";
    document.querySelector(".caixa-mercador").style.display = "block";
    document.querySelector(".caixa-negociação").style.display = "none";

    document.querySelector(".botoes7-videos").style.backgroundColor = "rgb(187, 16, 32)";
    document.querySelector(".botoes8-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes5-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes6-videos").style.backgroundColor = "rgb(93, 11, 19)";

    document.querySelector(".botoes7-videos").style.transform = "scaley(1.5)";
    document.querySelector(".botoes6-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes5-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes8-videos").style.transform = "scaley(1)";


    
    
    
   



    

}


function playVideoMercador () {
    let videoMercador = document.getElementById('VideoMercador');
    videoMercador.play();
    document.querySelector(".thumb-mercador-video").style.display = "none";
    document.querySelector(".botao-video-mercador").style.display = "none";
                
}



function clicarbotao7 () {
    let video5 = document.querySelector("caixa-negociação");
    document.querySelector(".caixa-maleta").style.display = "none";
    document.querySelector(".caixa-criação").style.display = "none";
    document.querySelector(".caixa-mercador").style.display = "none";
    document.querySelector(".caixa-negociação").style.display = "block";

    document.querySelector(".botoes8-videos").style.backgroundColor = "rgb(187, 16, 32)";
    document.querySelector(".botoes7-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes5-videos").style.backgroundColor = "rgb(93, 11, 19)";
    document.querySelector(".botoes6-videos").style.backgroundColor = "rgb(93, 11, 19)";

    document.querySelector(".botoes8-videos").style.transform = "scaley(1.5)";
    document.querySelector(".botoes6-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes7-videos").style.transform = "scaley(1)";
    document.querySelector(".botoes5-videos").style.transform = "scaley(1)";

    
    
    
   



    

}



function playVideoNegociação () {
    let videoNegociação = document.getElementById('VideoNegociação');
    videoNegociação.play();
    document.querySelector(".thumb-negociação-video").style.display = "none";
    document.querySelector(".botao-video-negociação").style.display = "none";
                
}







function clicarBotao8 () {
    let OqueÉ = document.querySelector(".caixa-oque-é");

    OqueÉ.style.display = "block";
    bonus.style.display = "none";
    modo.style.display = "none";



}



function clicarBotao9 () {
    let bonus = document.querySelector(".caixa-bonus-de-tempo");

    bonus.style.display = "block";
    oqueÉ.style.display = "none";
    modo.style.display = "none";



}



function clicarBotao10 () {
    let modo = document.querySelector(".caixa-modo-caotico");

    modo.style.display = "block";
    bonus.style.display = "none";
    oqueÉ.style.display = "none";



}

































