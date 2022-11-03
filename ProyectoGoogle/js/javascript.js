let lenguajes = ["java", "python", "javascript", "angular", "html", "c++", "c#", "cobol"]

function mostrarSugerencias(){
    document.getElementById("search").innerHTML=lenguajes.filter(filtrar)
    document.getElementById("search").className="card-body"
    document.getElementById("divsearch").className="card"

}

function filtrar(lenguaje, indice, lenguajes) {
    let q = document.getElementById("input").value


    return lenguaje.indexOf(q) != -1
}

function addElement() {
    const newDiv = document.createElement("div")

    const newContent = document.createTextNode(lenguajes.filter(filtrar));

    newDiv.innerHTML=newContent

    const cuerrentDiv = document.getElementById("search")

    document.body.insertBefore(newDiv, cuerrentDiv)
}

