console.log("Hola mundo")

function restar(a, b){
    console.log(`Resta: a-b=${a-b}`)
}

function raizCuadrada(){

    let x = document.getElementById('numero').value

    if (x == null) {
        document.getElementById('result').innerHTML="Por favor ingrese algun dato"
        document.getElementById('result').className='bg bg-danger'
    }else if (x < 0){
        document.getElementById('result').innerHTML="No es posible calcular la raíz cuadrada de un número negativo"
        document.getElementById('result').className='bg bg-danger'

    }else{
        document.getElementById('result').innerHTML=`El resultado es ${Math.sqrt(x)}`
        document.getElementById('result').className='bg bg-info'
    }
}

function aumentarSueldo(sueldo){
    sueldos+=sueltos/100
}


var sueldos = [5000, 16000, 80000]

function aunemntar1000(sueldo, indice, sueldos) {
    sueldo+=1000

    sueldos[indice]=sueldo
}

console.log(sueldos)

/* El every da true si todos los elementos son true*/  

edades=[16,18,13,65]

function esMayorEdad(edad) {
    return edad >= 18
}

edades.every(esMayorEdad)

function esMenorEdad(edad) {
    return edad < 18
}
/*
function esMenorEdad(edad) {
    return !(edad >= 18)
}
*/
edades.every(esMenorEdad)

/* Filter devuelve un array nuevo filtrado */

let edadesMayores = edades.filter(esMayorEdad)

console.log(edadesMayores)

let edadesMenores = edades.filter(esMayorEdad)

console.log(edadesMayores)

/* reduce espera cuatro parámetros: un contador, un elemento del array, su indice y el Array completo */

function sumatoriaReduce(sumaR, edad, indice, edades) {
    sumaR+=edad
    return sumaR
}

let sumatoriaEdades = edades.reduce(sumatoriaReduce)