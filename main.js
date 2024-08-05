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



