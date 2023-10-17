




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

    var menu = document.getElementById("menu");
    var items_menu = menu.getElementsByClassName("menu");

    // Función para cambiar los colores al hacer scroll
    function changeColorsOnScroll() {
        var scrollY = window.scrollY || document.documentElement.scrollTop;

        if (scrollY > 50) {
            menu.style.backgroundColor = noche ? "#1a1a1a" : "#fff";
            menu.style.color = noche ? "#fffcf1" : "#000";
            for (const item of items_menu) {
                item.style.color = noche ? "#fffcf1" : "#000";
            }
        } else {
            menu.style.backgroundColor = noche ? "" : "#000";
            menu.style.color = noche ? "#fffcf1" : "white";
            for (const item of items_menu) {
                item.style.color = noche ? "#fffcf1" : "white";
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












document.addEventListener("DOMContentLoaded", function() {
    const toggleCheckbox = document.getElementById("toggleCheckbox");
    const stylesheet = document.getElementById("stylesheet");
    const scriptElements = document.querySelectorAll("script[data-custom]");

    var currentStylesheet = "style.css";
    var currentScripts = ["script.js"];
    var noche = true;
    

    toggleCheckbox.addEventListener("change", function () {
        if (currentStylesheet === "style.css") {
            currentStylesheet = "noche.css";
            //currentScripts = ["noche.js"];
            noche = true;
            window.addEventListener("DOMContentLoaded", function () {
                var menu = document.getElementById("menu");
                var items_menu = menu.getElementsByClassName("menu");
            
            
                // FunciÃ³n para cambiar los colores al hacer scroll
                function changeColorsOnScroll() {
                    var scrollY = window.scrollY || document.documentElement.scrollTop;
            
            
                    if (scrollY > 50) {
                        //if noche
            
                        menu.style.backgroundColor = "#1a1a1a"; // Cambia el fondo a blanco al hacer scroll
                        menu.style.color = "#fffcf1"; // Cambia el color del texto a negro al hacer scroll
                        for (const item of items_menu) {
                            item.style.color = "#fffcf1"; // Cambia el color de los elementos del menÃº a negro
                        }
                        //else if dia
                        //tanto tanto
                        
                    } else {
                        menu.style.backgroundColor = ""; // Restaura el fondo original al llegar arriba
                        menu.style.color = "#fffcf1"; // Restaura el color del texto original al llegar arriba
                        for (const item of items_menu) {
                            item.style.color = "#fffcf1"; // Restaura el color original de los elementos del menÃº
                        }
                    }
                }
            
            
                // Agregar evento scroll para cambiar colores al cargar la pÃ¡gina
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
            }); 
        } else {
            currentStylesheet = "style.css";
            currentScripts = ["script.js"];
            noche = false;
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
            });
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




