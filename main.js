
let kg = document.getElementById("peso")
let m = document.getElementById("altura")
let imc = document.getElementById("resultado")
let boton = document.getElementById("operacion")

let indice = () => {
   
    let operacion = kg.value / ((m.value / 100) ** 2)
    imc.value = operacion.toFixed(1)
}
boton.addEventListener("click", indice)


let dolar = document.getElementById("dolar");
let conversorPeso = document.getElementById("conversorPeso")
const conversor = () => {
    if (dolar.value > 0) {
        let operacion = dolar.value * 4052
        conversorPeso.value = operacion
    }
}
dolar.addEventListener("input", conversor)
conversorPeso.addEventListener("input", conversorPeso)

let tareas = [
    {
        id: 1,
        titulo: "Comprar",
        texto: "Ir al supermercado y comprar frutas, verduras y pan.",
        realizada: false
    },
    {
        id: 2,
        titulo: "Hacer ejercicio",
        texto: "Hacer una sesión de yoga de veinte minutos en casa.",
        realizada: true
    },
    {
        id: 3,
        titulo: "Llamar al médico",
        texto: "Programar una cita con el médico para un chequeo anual.",
        realizada: false
    },
    {
        id: 4,
        titulo: "Leer un libro",
        texto: "Leer al menos 30 páginas del libro que estoy empezando.",
        realizada: true
    },
    {
        id: 5,
        titulo: "Preparar presentación",
        texto: "Crear las diapositivas y practicar la presentación para la reunión de mañana.",
        realizada: false
    },
];

let idGlobal = 5; 
const fatherNotes = document.getElementById("notesContainer");

function verNotes(notas, contenedor) {
    contenedor.innerHTML = '';
    if (notas.length === 0) {
        contenedor.innerHTML = '<div class="col-12 text-center"><p class="alert alert-info">NO HAY NOTAS PARA MOSTRAR</p></div>';
        return;
    }

    notas.forEach(nota => {
        const notElement = document.createElement('div');
        notElement.className = 'card bg-warning-subtle mb-3'; 
        notElement.innerHTML = `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${nota.id}" ${nota.realizada ? 'checked' : ''} onchange="marcarRealizada(${nota.id})">
                <label class="form-check-label" for="flexCheckDefault${nota.id}">${nota.titulo}</label>
                <div class="card-body ${nota.realizada ? 'realizada' : ''}">
                    <p class="card-text">${nota.texto}</p>
                    <button class="btn btn-danger" onClick="borrarNota(${nota.id})">Borrar nota</button>
                </div>
            </div>
        `;
        contenedor.appendChild(notElement);
    });
}

verNotes(tareas, fatherNotes);

function agregarNota() {
    const titulo = document.getElementById("noteTitle").value.trim();
    const contenido = document.getElementById("noteContent").value.trim();

    if (titulo && contenido) {
        idGlobal++;
        tareas.push({
            id: idGlobal,
            titulo: titulo,
            texto: contenido,
            realizada: false
        });
        verNotes(tareas, fatherNotes);
        document.getElementById("noteTitle").value = '';
        document.getElementById("noteContent").value = '';
    } else {
        console.log("Por favor, complete ambos campos.");
    }
}

function borrarNota(id) {
    tareas = tareas.filter(tarea => tarea.id != id);
    verNotes(tareas, fatherNotes);
}

const botonGuardar = document.getElementById("guardar");
botonGuardar.addEventListener("click", agregarNota);

const borraText = document.getElementById("clear");
borraText.addEventListener("click", () => {
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
});

function marcarRealizada(id) {
    const nota = tareas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        verNotes(tareas, fatherNotes);
    }
}

const filtroTexto = document.getElementById("filtro");
const botonRealizadas = document.getElementById("boton1");

function aplicarFiltros() {
    const texto = filtroTexto.value.trim().toLowerCase();
    const notasFiltradas = filtrarPorTexto(tareas, texto);
    verNotes(botonRealizadas.checked ? filtrarPorRealizadas(notasFiltradas) : notasFiltradas, fatherNotes);
}

filtroTexto.addEventListener("keyup", aplicarFiltros);
botonRealizadas.addEventListener("change", aplicarFiltros);

function filtrarPorRealizadas(array) {
    return array.filter(nota => nota.realizada);
}

function filtrarPorTexto(array, texto) {
    if (!texto) {
        return array;
    }
    return array.filter(nota =>
        nota.titulo.toLowerCase().includes(texto) ||
        nota.texto.toLowerCase().includes(texto)
    );
}
