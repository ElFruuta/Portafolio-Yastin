window.addEventListener("DOMContentLoaded", function () {
    const toggleCheckbox = document.getElementById("toggleCheckbox");
    const stylesheet = document.getElementById("stylesheet");
    const scriptElements = document.querySelectorAll("script[data-custom]");

    var currentStylesheet = "style.css";
    var currentScripts = ["script.js"];
    var noche = false;

    toggleCheckbox.addEventListener("change", function () {
        if (currentStylesheet === "style.css") {
            currentStylesheet = "noche.css";
            currentScripts = ["noche.js"];
            noche = true;
        } else {
            currentStylesheet = "style.css";
            currentScripts = ["script.js"];
            noche = false;
        }

        // Cambiar la hoja de estilo
        stylesheet.href = currentStylesheet;

        // Cambiar los archivos JavaScript
        for (const scriptElement of scriptElements) {
            scriptElement.parentNode.removeChild(scriptElement);
        }

        for (const scriptSrc of currentScripts) {
            const newScript = document.createElement("script");
            newScript.src = scriptSrc;
            newScript.setAttribute("data-custom", "true");
            document.body.appendChild(newScript);
        }
    });

    menuMobilemenu = document.getElementById("menu", "menu-mobile");
    var items_menu = menu.getElementsByClassName("menu");
    var itemss = menu.getElementsByClassName("menu");
    var menuMobile = document.getElementById("menu-mobile");

    // Función para cambiar los colores al hacer scroll
    function changeColorsOnScroll() {
        var scrollY = window.scrollY || document.documentElement.scrollTop;

        if (scrollY > 50) {
            menu.style.backgroundColor = noche ? "#1a1a1a" : "#fff";
            menu.style.color = noche ? "#fffcf1" : "#000";
            menuMobile.style.backgroundColor = noche ? "#1a1a1a" : "#fff";
            menuMobile.style.color = noche ? "#fffcf1" : "#000";
            for (const item of items_menu) {
                item.style.color = noche ? "#fffcf1" : "#000";
            }
            for (const item of items_menu) {
                item.style.color = noche ? "#fffcf1" : "#000";
            }
        } else {
            menu.style.backgroundColor = noche ? "" : "#000";
            menu.style.color = noche ? "#fffcf1" : "white";
            menuMobile.style.backgroundColor = noche ? "" : "#000";
            menuMobile.style.color = noche ? "#fffcf1" : "white";
            for (const itemsss of itemss) {
                itemsss.style.color = noche ? "#fffcf1" : "white";
            }
            for (const itemsss of itemss) {
                itemsss.style.color = noche ? "#fffcf1" : "white";
            }
        }
    }

    // Agregar evento scroll para cambiar colores al cargar la página
    changeColorsOnScroll();

    window.addEventListener("scroll", changeColorsOnScroll);

    // Agrega eventos de escucha para el color del texto al pasar el mouse
    for (const item of items_menu) {
        item.addEventListener("mouseenter", function () {
            this.style.color = noche ? "#ebb40c" : "#ebb40c";
        });
        item.addEventListener("mouseleave", function () {
            changeColorsOnScroll();
        });
    }
});









function llenarBarra(porcentaje, elementoId) {
    const progreso = document.getElementById(elementoId);
    progreso.style.width = porcentaje + '%';
}

// Llena la barra de HTML al 80%
llenarBarra(90, 'miProgreso');

// Llena la barra de CSS al 65%
llenarBarra(80, 'miProgreso-css');

// Llena la barra de JavaScript al 90%
llenarBarra(60, 'miProgreso-js');

llenarBarra(30, 'miProgreso-py');

function cambiarColor(id, color) {
    const button = document.getElementById(id);
    button.style.color = color;
}

function restaurarColor(id) {
    const button = document.getElementById(id);
    button.style.color = ''; // Restaurar el color original
}

let menuVisible = false;

function mostrar() {
    const menu = document.getElementById('menu2');

    if (!menuVisible) {
        menu.style.left = '0';
        menuVisible = true;
        setTimeout(()=> {
        }, 1000)
    } else {
        menu.style.left = '100%';
        menuVisible = false;
        setTimeout(() => {
        }, 1000);
    }
}

