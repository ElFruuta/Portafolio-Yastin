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
        var items_menu = menu.getElementsByClassName("menu"); // Cambiar el color de los items a negro al hacer scroll
        for (const item of items_menu) {
            item.style.color = "#000";
        }

    } else {
        menu.style.backgroundColor = "#000"; // Restaura el fondo original al llegar arriba
        menu.style.color = "white"; // Restaura el color del texto original al llegar arriba
        
        // Cambiar el color de los items a blanco al hacer scroll
        var items_menu = menu.getElementsByClassName("menu"); 
        for (const item of items_menu) {
            item.style.color = "#fff";
        }
    }
};

document.querySelectorAll('a.menu').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Previene la navegación predeterminada
        var targetId = this.getAttribute('href').substring(1); // Obtiene el ID del destino
        var targetElement = document.getElementById(targetId); 
        if (targetElement) {
            var targetPosition = targetElement.offsetTop; 
            var duration = 1000; 

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth', 
                duration: duration
            });
        }
    });
});

