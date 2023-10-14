document.addEventListener("DOMContentLoaded", function() {
    const toggleCheckbox = document.getElementById("toggleCheckbox");
    const stylesheet = document.getElementById("stylesheet");
    const scriptElements = document.querySelectorAll("script[data-custom]");

    let currentStylesheet = "style.css";
    let currentScripts = ["script.js"];

    toggleCheckbox.addEventListener("change", function () {
        if (currentStylesheet === "style.css") {
            currentStylesheet = "noche.css";
            currentScripts = ["noche.js"];
        } else {
            currentStylesheet = "style.css";
            currentScripts = ["script.js"];
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
