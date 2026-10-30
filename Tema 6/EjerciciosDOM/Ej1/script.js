/** */



function aleatorio(){

    let random= Math.floor(Math.random()*100);

    //Creamos un li 
    let li = document.createElement("li");
    li.textContent=random;


    //Aqui lo que hacemos es coger el id del ul y meterle el li dentro del padre ul
    let desordenada= document.getElementById("desordenada");
    desordenada.appendChild(li);

}

let boton= document.getElementById("boton");
boton.addEventListener("click", aleatorio);

