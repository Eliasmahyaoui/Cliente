/** 
let parrafo1= document.getElementById("parrafo1"); 
let parrafo2= document.getElementById("parrafo2");
let parrafo3= document.getElementById("parrafo3");


function eliminar(evento){




}

*/

function ocultar(elemento)
{
    elemento.style.display= 'none';
}


const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {


   p[i].addEventListener("click",function(){ocultar(this)});
}


