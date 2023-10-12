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


