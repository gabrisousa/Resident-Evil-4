document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('introVideo');
    const videoContainer = document.getElementById('videoContainer');

    video.addEventListener('ended', function() {
        // Inicia o fade out ao alterar a opacidade
        videoContainer.style.opacity = '0';

        // Após a transição terminar, o vídeo é ocultado ou removido
        setTimeout(() => {
            videoContainer.style.display = 'none';
            // Ou, se preferir remover o vídeo do DOM:
            // videoContainer.remove();
        }, 2000); // O tempo aqui deve coincidir com o tempo de transição (2 segundos)

        
        
        })
    })
