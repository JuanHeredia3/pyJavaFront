var categoria = document.getElementById("categoria")
var totalAPagar = document.getElementById("totalAPagar")
var resumen = document.getElementById("resumen")

resumen.addEventListener("click", function(){

    if (categoria.selectedIndex == 0) {
        var valorTicket = 200

        valorTicket = valorTicket*0.8

        totalAPagar.innerHTML="Total a pagar: $" + valorTicket

    }else if (categoria.selectedIndex == 1) {
        var valorTicket = 200

        valorTicket = valorTicket*0.5

        totalAPagar.innerHTML="Total a pagar: $" + valorTicket
    
    }else{
        var valorTicket = 200

        valorTicket = valorTicket*0.15

        totalAPagar.innerHTML="Total a pagar: $" + valorTicket
    }    
})

var borrar = document.getElementById("borrar")

borrar.addEventListener("click", function(){
    totalAPagar.innerHTML="Total a pagar: $"
})



