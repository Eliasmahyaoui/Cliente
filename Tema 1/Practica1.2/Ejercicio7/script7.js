/**Ejercicio 7. Modifica el programa anterior para que, cuando saquemos el ratón del <div>
vuelva a su estado original, sin color de fondo. */

let div = document.getElementById("colorear");


function cambiarColor() {

        colorear.style.backgroundColor = "orange";
    
}

function volverOriginal(){
    colorear.style.backgroundColor= "";
}