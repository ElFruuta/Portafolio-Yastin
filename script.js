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




//Esta funcion me destrozo la vida TT//


window.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("menu");
    var items_menu = menu.getElementsByClassName("menu");

    // Función para cambiar los colores al hacer scroll
    function changeColorsOnScroll() {
        var scrollY = window.scrollY || document.documentElement.scrollTop;

        if (scrollY > 50) {
            menu.style.backgroundColor = "#fff"; // Cambia el fondo a blanco al hacer scroll
            menu.style.color = "#000"; // Cambia el color del texto a negro al hacer scroll
            for (const item of items_menu) {
                item.style.color = "#000"; // Cambia el color de los elementos del menú a negro
            }
        } else {
            menu.style.backgroundColor = "#000"; // Restaura el fondo original al llegar arriba
            menu.style.color = "white"; // Restaura el color del texto original al llegar arriba
            for (const item of items_menu) {
                item.style.color = "white"; // Restaura el color original de los elementos del menú
            }
        }
    }

    // Agregar evento scroll para cambiar colores al cargar la página
    changeColorsOnScroll();

    window.addEventListener("scroll", changeColorsOnScroll);

    // Agrega eventos de escucha para el color del texto al pasar el mouse
    for (const item of items_menu) {
        item.addEventListener("mouseenter", function () {
            this.style.color = "#ebb40c"; // Cambia el color del texto al pasar el mouse
        });
        item.addEventListener("mouseleave", function () {
            changeColorsOnScroll(); // Restaura el color original dependiendo del estado del scroll
        });
    }
}); //Te ODIOOOOOOOOO//





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

document.querySelector('.formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtén los valores de los campos
    const email = document.querySelector('#email').value;
    const nombre = document.querySelector('#nombre').value;
    const comentario = document.querySelector('#comentario').value;

    // Crea un objeto con los datos del comentario
    const comentarioData = {
        email: email,
        nombre: nombre,
        comentario: comentario
    };

    // Envía los datos al servidor (debes proporcionar la URL correcta)
    fetch('/ruta_al_servidor', {
        method: 'POST',
        body: JSON.stringify(comentarioData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Comentario enviado con éxito
                alert('Comentario enviado con éxito');
                // Puedes redirigir al usuario a una página de confirmación si lo deseas
            } else {
                alert('Hubo un error al enviar el comentario');
            }
        })
        .catch(error => {
            console.error('Error de red:', error);
        });
});

//Funcion mostrar y dejar de mostrar//

window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade-in, .fade-out");

    elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();

        if (elementPosition.top < window.innerHeight && elementPosition.bottom >= 0) {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        } else {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        }
    });
});

