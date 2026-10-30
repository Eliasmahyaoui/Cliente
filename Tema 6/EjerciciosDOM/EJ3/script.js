
let parrafo1= document.getElementById("parrafo1"); 
let parrafo2= document.getElementById("parrafo2");
let parrafo3= document.getElementById("parrafo3");




function clickParrafo(evento, elemento) {


    if (evento.button === 0) {
        ocultar(elemento);
    } else if (evento.button === 2) {
        
        eliminar(elemento);
    }
}

function ocultar(elemento) {
    elemento.style.display = 'none';
}


function eliminar(elemento) {
    elemento.remove();
}






const p = document.getElementsByTagName('p');


for (let i = 0; i < p.length; i++) {
    p[i].addEventListener("click", function (e) {
        clickParrafo(e, p[i])
    });



}


function reaparecer(){

    

}


document.addEventListener("contextmenu", (e) => {e.preventDefault()}); 



