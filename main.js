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

const conversion = 4052//precio 4 agosto
function conversor() {
    let dolares = document.getElementById("dolar")
    let peso = document.getElementById("conversorPeso")
    
    let dolar = parseFloat(dolares.value)
    let pesos = dolar * tipoDeCambio

    dolares.value =pesos.toFixed(2)
    document.getElementById("dolar").addEventListener("keydown",conversorPeso);
}

