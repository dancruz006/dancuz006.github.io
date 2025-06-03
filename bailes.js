  // Obtener todos los elementos de las partes
        const items = document.querySelectorAll('.grid-item');
        const videoPlayer = document.getElementById('videoPlayer');
        const source = videoPlayer.querySelector('source');

        // Función para reproducir el video correspondiente
        items.forEach(item => {
            item.addEventListener('click', () => {
                const videoSrc = item.getAttribute('data-video');
                source.setAttribute('src', videoSrc);
                videoPlayer.load();
                videoPlayer.play();
            });
        });
