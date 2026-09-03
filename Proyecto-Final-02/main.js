const API_URL = "https://apibox.vercel.app/6pfqodg6KcghTiOxcXLgIhksnhbSzTD1/api/dragon-ball";

const contador = document.getElementById("contador");
const formulario = document.getElementById("form");
const nuevo = document.getElementById("nuevo");
const personajeID = document.getElementById("personajeID");
const nombre = document.getElementById("name");
const imagen = document.getElementById("image");
const raza = document.getElementById("race");
const género = document.getElementById("gender");
const agregar = document.getElementById("agregar");

const listado = document.getElementById("listado");
const cargando = document.getElementById("cargando");
const vacío = document.getElementById("vacío");

const botones = document.getElementById("botones");
const inicio = document.getElementById("inicio");
const antes = document.getElementById("antes");
const listados = document.getElementById("listados");
const después = document.getElementById("después");
const final = document.getElementById("final");

const totalDeLista = 5;
let personajes = [];
let listaActual = 1;

async function listarPersonajes() {
    mostrarLoading(true);

    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

        const data = await respuesta.json();

        if (Array.isArray(data)) {
            personajes = data;
        } else if (Array.isArray(data.items)) {
            personajes = data.items;
        } else if (Array.isArray(data.data)) {
            personajes = data.data;
        } else {
            personajes = [];
        }

        if (listaActual > Math.ceil(personajes.length / totalDeLista)) {
            listaActual = 1;
        }

        renderizarPersonajes();
    } catch (error) {
        console.error(error);
        listado.innerHTML = `
            <div class="vacío">
                <h3>ERROR AL CARGAR PERSONAJES</h3>
            </div>
        `;
        botones.classList.add("hidden");
    } finally {
        mostrarLoading(false);
    }
}

function renderizarPersonajes() {
    contador.textContent = personajes.length;
    listado.innerHTML = "";

    if (personajes.length === 0) {
        vacío.classList.remove("hidden");
        botones.classList.add("hidden");
        return;
    }

    vacío.classList.add("hidden");

    const páginasTotales = Math.ceil(personajes.length / totalDeLista);
    const principio = (listaActual - 1) * totalDeLista;

    const personajesPorLista = personajes.slice(
        principio, principio + totalDeLista
    );

    personajesPorLista.forEach((personaje) => {
        listado.appendChild(crearTarjeta(personaje));
    });

    if (páginasTotales > 1) {
        botones.classList.remove("hidden");
        actualizarBotones(páginasTotales);
    } else {
        botones.classList.add("hidden");
    }
}

function crearTarjeta(personaje) {
    const id = personaje.id;
    const tarjeta = document.createElement("article");
    tarjeta.className = "personaje";

    const nombreDelPersonaje = personaje.name || "Sin nombre";
    const razaDelPersonaje = personaje.race || "Sin raza";
    const géneroDelPersonaje = personaje.gender || "";
    const imagenDelPersonaje = personaje.image || "https://placehold.co/96x96/eaf4ff/2776bf?text=?";
    
    const genderHTML = géneroDelPersonaje
    ? `<span class="dato dato-género">${escaparHTML(géneroDelPersonaje)}</span>`
    : "";

    tarjeta.innerHTML = `
        <img src="${escaparHTML(imagenDelPersonaje)}" alt="${escaparHTML(nombreDelPersonaje)}" class="foto" onerror="this.onerror=null;this.src='https://placehold.co/96x96/eaf4ff/2776bf?text=?';">
        
        <div class="datos">
            <h3>${escaparHTML(nombreDelPersonaje)}</h3>
            <div class="datos">
                <span class="dato dato-raza">${escaparHTML(razaDelPersonaje)}</span>
                ${genderHTML}
            </div>
        </div>

        <div class="personaje-botones">
            <button class="btn-edit" type="button">✏️ Editar</button>
            <button class="btn-delete" type="button">🗑️ Eliminar</button>
        </div>
    `;

    tarjeta.querySelector(".btn-edit").addEventListener("click", () => editarTarjeta(id));
    tarjeta.querySelector(".btn-delete").addEventListener("click", () => eliminarTarjeta(id));

    return tarjeta;
}

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = personajeID.value.trim();
    const personajeEnLaLista = {
        name: nombre.value.trim(),
        image: imagen.value.trim(),
        race: raza.value.trim(),
        gender: género.value.trim()
    };

    if (!personajeEnLaLista.name || !personajeEnLaLista.image || !personajeEnLaLista.race || !personajeEnLaLista.gender) {
        alert("Faltan datos.");
        return;
    }

    try {
        agregar.disabled = true;
        agregar.textContent = id ? "Actualizando..." : "Guardando...";

        if (id) {
            await actualizarTarjeta(id, personajeEnLaLista);
        } else {
            await agregarPersonaje(personajeEnLaLista);
        }

        limpiarFormulario();
        await listarPersonajes();
    } catch (error) {
        console.error(error);
        alert("No se guardó el personaje.");
    } finally {
        agregar.disabled = false;
        if (!personajeID.value) {
            agregar.innerHTML = "+ Agregar personaje";
        }
    }
});

async function agregarPersonaje(personaje) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personaje)
    });

    if (!response.ok) throw new Error(`POST HTTP ${response.status}`);
    return response.json();
}

async function editarTarjeta(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error(`GET ID HTTP ${response.status}`);

        const personaje = await response.json();
        cargarFormulario(personaje, id);
    } catch (error) {
        console.error(error);
        const personaje = personajes.find(item => String(item.id) === String(id));
        if (personaje) {
            cargarFormulario(personaje, id);
        } else {
            alert("No se encontró el personaje.");
        }
    }
}

function cargarFormulario(personaje, id) {
    personajeID.value = id;
    nombre.value = personaje.name || "";
    imagen.value = personaje.image || "";
    raza.value = personaje.race || "";
    género.value = personaje.gender || "";

    nuevo.textContent = "EDITAR PERSONAJE";
    agregar.innerHTML = "Actualizar personaje";
}

async function actualizarTarjeta(id, personaje) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personaje)
    });

    if (!response.ok) throw new Error(`PUT HTTP ${response.status}`);
    return response.json();
}

async function eliminarTarjeta(id) {
    const personaje = personajes.find(item => String(item.id) === String(id));
    const nombrePersonaje = personaje?.name || "este personaje";

    if (!confirm(`¿Deseas eliminar a ${nombrePersonaje}?`)) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error(`DELETE HTTP ${response.status}`);
        await listarPersonajes();
    } catch (error) {
        console.error(error);
        alert("No se pudo borrar el personaje.");
    }
}

function limpiarFormulario() {
    personajeID.value = "";
    nombre.value = "";
    imagen.value = "";
    raza.value = "";
    género.value = "";
    nuevo.textContent = "👤 NUEVO PERSONAJE";
    agregar.innerHTML = "+ Agregar Personaje";
}

function actualizarBotones(totalDeLista) {
    inicio.disabled = listaActual === 1;
    antes.disabled = listaActual === 1;
    después.disabled = listaActual === totalDeLista;
    final.disabled = listaActual === totalDeLista;

    listados.innerHTML = "";
    const páginas = obtenerLista(totalDeLista);

    páginas.forEach((página) => {
        if (página === "...") {
            const span = document.createElement("span");
            span.textContent = "...";
            listados.appendChild(span);
            return;
        }

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "número";
        btn.textContent = página;

        if (página === listaActual) {
            btn.style.fontWeight = "bold";
        }

        btn.addEventListener("click", () => {
            listaActual = página;
            renderizarPersonajes();
        });

        listados.appendChild(btn);
    });
}

function obtenerLista(total) {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

    const resultado = [1];
    if (listaActual > 3) resultado.push("...");

    const comienzo = Math.max(2, listaActual - 1);
    const fin = Math.min(total - 1, listaActual + 1);

    for (let i = comienzo; i <= fin; i++) {
        resultado.push(i);
    }

    if (listaActual < total - 2) resultado.push("...");
    resultado.push(total);

    return resultado;
}

inicio.addEventListener("click", () => { listaActual = 1; renderizarPersonajes(); });
antes.addEventListener("click", () => { if (listaActual > 1) { listaActual--; renderizarPersonajes(); } });
después.addEventListener("click", () => { 
    const tarjetasTotales = Math.ceil(personajes.length / totalDeLista);
    if (listaActual < tarjetasTotales) { listaActual++; renderizarPersonajes(); }
});
final.addEventListener("click", () => { 
    listaActual = Math.ceil(personajes.length / totalDeLista); 
    renderizarPersonajes(); 
});

function mostrarLoading(estado) {
    cargando.classList.toggle("hidden", !estado);
}

function escaparHTML(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

listarPersonajes();