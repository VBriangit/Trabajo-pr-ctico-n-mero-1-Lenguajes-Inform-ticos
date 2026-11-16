
// Modo claro y modo oscuro

const botonTema = document.getElementById("botonTema");

// Recuperar el tema guardado
const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "claro") {
    document.body.classList.add("modo-claro");
}

function actualizarTextoBoton() {
    if (!botonTema) return;

    if (document.body.classList.contains("modo-claro")) {
        botonTema.textContent = "☾ Modo oscuro";
    } else {
        botonTema.textContent = "☀ Modo claro";
    }
}

actualizarTextoBoton();

if (botonTema) {
    botonTema.addEventListener("click", function () {
        document.body.classList.toggle("modo-claro");

        // Guardar la preferencia del usuario
        const temaActual = document.body.classList.contains("modo-claro")
            ? "claro"
            : "oscuro";

        localStorage.setItem("tema", temaActual);

        actualizarTextoBoton();
    });
}


// Validacion Newsletter

const formNewsletter = document.getElementById("formNewsletter");

if (formNewsletter) {
    formNewsletter.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("emailNewsletter");
        const mensaje = document.getElementById("mensajeNewsletter");

        if (!email.checkValidity()) {
            email.reportValidity();
            return;
        }

        mensaje.textContent =
            "¡Gracias! Tu dirección de correo tiene un formato válido.";

        formNewsletter.reset();
    });
}


// Confirmacion de formulario
const formContacto = document.getElementById("formulario-gotham");

if (formContacto) {
    formContacto.addEventListener("submit", function (event) {
        event.preventDefault();
        const mensaje = document.getElementById("mensajeContacto");

        if (!formContacto.checkValidity()) {
            formContacto.reportValidity();
            return;
        }

        mensaje.textContent = "¡Gracias! Tu mensaje fue validado correctamente.";

        formContacto.reset();
    });
}