const ventanaEmergente = document.getElementById('imagenEmergente');

const imagenes = document.querySelectorAll('.galeria-imagen');

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        mostrarImagen(imagen.src, imagen.alt);
    });
});

function mostrarImagen(urlImagen, textoAlternativo) {
    // Carga la imagen en el elemento img de la ventana emergente
    const imagenCompleta = document.getElementById('imagenCompleta');
    imagenCompleta.src = urlImagen;
    imagenCompleta.alt = textoAlternativo;

    // Muestra la ventana emergente
    ventanaEmergente.style.display = 'block';
}

const cerrarVentana = document.querySelector('#cerrar');

cerrarVentana.addEventListener('click', () => {
    ventanaEmergente.style.display = 'none';
});
