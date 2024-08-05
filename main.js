//1
let kg = document.getElementById("peso")
let m = document.getElementById("altura")
let imc = document.getElementById("resultado")
let boton = document.getElementById("operacion")

let indice = () => {
    //console.log(kg.value);
    let operacion = kg.value / ((m.value / 100) ** 2)
    imc.value = operacion.toFixed(1)
}
boton.addEventListener("click", indice)
//2
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
//3
let tareas = [
    {
        id: 1,
        titulo: 'Comprar groceries',
        texto: 'Ir al supermercado y comprar frutas, verduras y pan.',
        realizada: false
    },
    {
        id: 2,
        titulo: 'Hacer ejercicio',
        texto: 'Hacer una sesión de yoga de 30 minutos en casa.',
        realizada: true
    },
    {
        id: 3,
        titulo: 'Llamar al médico',
        texto: 'Programar una cita con el médico para un chequeo anual.',
        realizada: false
    },
    {
        id: 4,
        titulo: 'Leer un libro',
        texto: 'Leer al menos 50 páginas del libro que estoy empezando.',
        realizada: true
    },
    {
        id: 5,
        titulo: 'Preparar presentación',
        texto: 'Crear las diapositivas y practicar la presentación para la reunión de mañana.',
        realizada: false
    },
];
let idGlobal = 5;
const fatherNotes = document.getElementById("notesContainer");
const botonGuardar = document.getElementById("guardar");

function verNotes(notes, notesContainer) {
    notesContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar notas
    for (let i = 0; i < notes.length; i++) {
        notesContainer.innerHTML += `
            <div class="card">
                <h5 class="card-header">${notes[i].titulo}</h5>
                <div class="card-body">
                    <p class="card-text">${notes[i].texto}</p>
                    <button onClick="borrarNota(${notes[i].id})">eliminar notes</button>
                </div>
            </div>
        `;
    }
}

verNotes(tareas, fatherNotes);

function agregarNote(titulo, texto) {
    idGlobal++;
    tareas.push({
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    });
    verNotes(tareas, fatherNotes);
}

function borrarNota(id) {
    tareas = tareas.filter(tarea => tarea.id != id);
    fatherNotes.innerHTML = "";
    verNotes(tareas, fatherNotes);
}

botonGuardar.addEventListener("click", () => {
    const titulo = document.getElementById("noteTitle").value.trim();
    const contenido = document.getElementById("noteContent").value.trim();

    if (titulo && contenido) {
        agregarNote(titulo, contenido);
        document.getElementById("noteTitle").value = '';
        document.getElementById("noteContent").value = '';
    } else {
        alert("Por favor, complete ambos campos.");
    }
});

const borrarText = document.getElementById("clear");
borrarText.addEventListener("click", () => {
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
});

function filtrarPorRealizadas(array) {
    return array.filter(nota => nota.realizada);
}

function filtrarPorTexto(array, texto) {
    if (!texto) {
        return array;
    }
    return array.filter(nota => 
        nota.titulo.toLowerCase().includes(texto.toLowerCase()) ||
        nota.texto.toLowerCase().includes(texto.toLowerCase()) 
    );
}

const filtroTexto = document.getElementById("filtro");
const botonRealizadas = document.getElementById("boton1");

function aplicarFiltros() {
    let texto = filtroTexto.value.trim();
    let notasFiltradasPorTexto = filtrarPorTexto(tareas, texto);
    let notasFiltradasFinales = botonRealizadas.checked 
        ? filtrarPorRealizadas(notasFiltradasPorTexto)
        : notasFiltradasPorTexto;
    
    verNotes(notasFiltradasFinales, fatherNotes);
}
filtroTexto.addEventListener("keyup", aplicarFiltros);
botonRealizadas.addEventListener("'change'", aplicarFiltros);


