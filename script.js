function llenarBarra(porcentaje, elementoId) {
    const progreso = document.getElementById(elementoId);
    progreso.style.width = porcentaje + '%';
}

// Llena la barra de HTML al 80%
llenarBarra(90, 'miProgreso');

// Llena la barra de CSS al 65%
llenarBarra(65, 'miProgreso-css');

// Llena la barra de JavaScript al 90%
llenarBarra(30, 'miProgreso-js');

function cambiarColor(id, color) {
    const button = document.getElementById(id);
    button.style.color = color;
}

function restaurarColor(id) {
    const button = document.getElementById(id);
    button.style.color = ''; // Restaurar el color original
}


window.onscroll = function () {


    var menu = document.getElementById("menu");

    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        menu.style.backgroundColor = "#fff"; // Cambia el fondo a blanco al hacer scroll
        menu.style.color = "#000"; // Cambia el color del texto a negro al hacer scroll
    } else {
        menu.style.backgroundColor = "#000"; // Restaura el fondo original al llegar arriba
        menu.style.color = "white"; // Restaura el color del texto original al llegar arriba
    }
};

document.querySelectorAll('a.menu').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Previene la navegación predeterminada
        var targetId = this.getAttribute('href').substring(1); // Obtiene el ID del destino
        var targetElement = document.getElementById(targetId); // Encuentra el elemento destino
        if (targetElement) {
            var targetPosition = targetElement.offsetTop; // Obtiene la posición del elemento destino
            var duration = 1000; // Duración de la animación en milisegundos (1 segundo)

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth', // Hace que el desplazamiento sea suave
                duration: duration
            });
        }
    });
});

