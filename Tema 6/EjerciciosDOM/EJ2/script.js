

//Cogemos el parrafo del HTML
let parrafo= document.getElementById("parrafo");


//Funcion con evento 

function mostrarMensaje(evento){

    if (evento.type ==="mousemove") {


        parrafo.textContent= "La posicion actual del ratón es: " + "X: " + evento.clientX +  "  " + " Y: " + evento.clientY;
    }


}


parrafo.addEventListener("onmousemove", mostrarMensaje);



