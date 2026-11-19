
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
            "¡Gracias por formar parte del boletin de Gotham City!";

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



// SECCION PREGUNTAS FRECUENTES 

const preguntas = [
  {
    pregunta: "¿Es seguro caminar de noche por Gotham?",
    respuesta: "Depende del barrio. El centro y Park Row cuentan con patrullaje constante del GCPD. En el East End, mejor moverse en grupo y evitar los callejones. Y si ves una silueta con capa en los techos, tranquilo: está de tu lado."
  },
  {
    pregunta: "¿Qué es la Bat-señal?",
    respuesta: "Es un reflector instalado en la azotea de la Jefatura de Policía. Cuando se enciende, proyecta un símbolo de murciélago sobre las nubes. Es una señal de alerta que el comisionado Gordon usa en emergencias. No es una atracción turística, por favor no la enciendan por diversión."
  },
  {
    pregunta: "¿Cómo llego a Gotham City?",
    respuesta: "Hay tres accesos principales: el Puente Gotham, el Puente Sprang y la Estación Central de trenes. El aeropuerto internacional opera vuelos diarios, aunque con demoras frecuentes por niebla y por eventos imprevistos."
  },
  {
    pregunta: "¿Se puede visitar el Asilo Arkham?",
    respuesta: "No. Arkham es una institución psiquiátrica de máxima seguridad y no admite visitas turísticas. Podés ver su arquitectura gótica desde el exterior, a una distancia prudente."
  },
  {
    pregunta: "¿Cuáles son los mejores lugares para comer?",
    respuesta: "La zona de Little Italy tiene las mejores pastas de la ciudad. Para algo más elegante, probá los restaurantes del distrito financiero. Para un café a cualquier hora, hay locales abiertos las 24 horas cerca de la Estación Central."
  },
  {
    pregunta: "¿Cuál es la mejor época para viajar?",
    respuesta: "La primavera, cuando llueve menos. Gotham es oscura y nublada casi todo el año, así que llevá abrigo y paraguas sin importar la estación."
  }
];

const lista = document.getElementById("faq-lista");

// Generar el HTML a partir de los datos
preguntas.forEach((item, i) => {
  const div = document.createElement("div");
  div.className = "faq-item";
  div.innerHTML = `
    <button class="faq-pregunta" aria-expanded="false" aria-controls="faq-resp-${i}">
      <span>${item.pregunta}</span>
      <span class="faq-icono" aria-hidden="true">+</span>
    </button>
    <div class="faq-respuesta" id="faq-resp-${i}" role="region">
      <div class="faq-respuesta-interno">
        <p>${item.respuesta}</p>
      </div>
    </div>
  `;
  lista.appendChild(div);
});

// Abrir / cerrar
lista.addEventListener("click", (e) => {
  const boton = e.target.closest(".faq-pregunta");
  if (!boton) return;

  const item = boton.parentElement;
  const yaAbierto = item.classList.contains("abierto");

  // Cerrar todos (comportamiento "solo uno abierto a la vez")
  lista.querySelectorAll(".faq-item").forEach((el) => {
    el.classList.remove("abierto");
    el.querySelector(".faq-pregunta").setAttribute("aria-expanded", "false");
  });

  // Si estaba cerrado, abrirlo
  if (!yaAbierto) {
    item.classList.add("abierto");
    boton.setAttribute("aria-expanded", "true");
  }
});