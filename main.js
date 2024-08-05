//1
let kg = document.getElementById("peso")
let m = document.getElementById("altura")
let imc = document.getElementById("resultado")
let boton = document.getElementById("operacion")

let indice =()=>{
    //console.log(kg.value);
    let operacion = kg.value/((m.value/100)**2)
    imc.value = operacion.toFixed(1)
}
boton.addEventListener("click", indice)
//2
let dolar = document.getElementById("dolar");
let conversorPeso = document.getElementById("conversorPeso")
const conversor = ()=>{
    if(dolar.value > 0){
        let operacion =dolar.value *4052
        conversorPeso.value = operacion
    }
}
dolar.addEventListener("input", conversor)
conversorPeso.addEventListener("input", conversorPeso)
//3
const tareas = [
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
let idGlobal =5
