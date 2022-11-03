window.onload = function () {
    let listAlumnos = [
        [1, "Juan", "Heredia"],
        [2, "Juan", "Heredia"],
        [3, "Juan", "Heredia"],
        [4, "Juan", "Heredia"],
        [5, "Juan", "Heredia"],
        [6, "Juan", "Heredia"],
        [7, "Juan", "Heredia"],
        [8, "Juan", "Heredia"],
        [9, "Juan", "Heredia"],
        [10, "Juan", "Heredia"],
        [11, "Juan", "Heredia"],
        [12, "Juan", "Heredia"]
    ];

    let body = document.body

    let table = document.createElement("table")
    table.setAttribute("class", "table table striped")

    let thead = document.createElement("thead")
    thead.setAttribute("class", "table-dark")

    let tr = document.createElement("tr")
    let th1 = document.createElement("th")
    let texto1 = document.createTextNode("#ID")
    th1.appendChild(texto1)
    tr.appendChild(th1)

    let th2 = document.createElement("th")
    let texto2 = document.createTextNode("Nombre")
    th2.appendChild(texto2)
    tr.appendChild(th2)

    let th3 = document.createElement("th")
    let texto3 = document.createTextNode("Apellido")
    th3.appendChild(texto3)
    tr.appendChild(th3)

    let th4 = document.createElement("th")
    let texto4 = document.createTextNode("")
    th4.appendChild(texto4)
    tr.appendChild(th4)

    thead.appendChild(tr)
    table.appendChild(thead)

    let tbody = document.createElement("tbody")

    for (let i = 0; i < listAlumnos.length; i++) {
        let tr = document.createElement("tr")
        tr.setAttribute("id", `tr${i}`)

        let td1 = document.createElement("td")
        let texto1 = document.createTextNode(listAlumnos[i][0])
        td1.appendChild(texto1)
        tr.appendChild(td1)

        let td2 = document.createElement("td")
        let texto2 = document.createTextNode(listAlumnos[i][1])
        td2.appendChild(texto2)
        tr.appendChild(td2)

        let td3 = document.createElement("td")
        let texto3 = document.createTextNode(listAlumnos[i][2])
        td3.appendChild(texto3)
        tr.appendChild(td3)

        let td4 = document.createElement("td")
        let span = document.createElement("span")
        span.setAttribute("onclick", `eliminarFila('tr${i}')`)
        span.setAttribute("class", "m-1")
        let iTag = document.createElement("i")
        iTag.setAttribute("class", "fa-solid fa-trash-can")
        span.appendChild(iTag)
        td4.appendChild(span)
        tr.appendChild(td4)

        tbody.appendChild(tr)
    }

    table.appendChild(tbody)

    body.appendChild(table)

}      

function eliminarFila(fila) {
    document.getElementById(fila).style.display="none"
}