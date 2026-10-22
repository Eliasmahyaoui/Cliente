/**Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup 
se deje vacío o se cancele.
A continuación, se eliminarán todas las palabras repetidas y además se ordenarán en 
español, pero en orden inverso (de la Z a la A) y se mostrará el resultado por pantalla.
Utilizar funciones flecha si se considera apropiado. */



//Pedimos al usuario palabras continuamente hasta que el popup se deje vacio o se cancele

let palabras = [];
let usuario = prompt("Dime palabras:");
while (usuario != null && usuario != "") {
    palabras.push(usuario); //Metemos en el array llamado palabras todas las palabras de usuario
    usuario = prompt("Dime palabras:");
}

//Vemos por consola si efectivamente se guardan en el array
console.log(palabras);

//Una vez se guarden no queremos repetidos  asi que los metemos en un set mejor 
let noRepetidos = new Set(palabras);
console.log(noRepetidos);


//Ahora volvemos a pasar el Set a un Array para poder usar los metodos
const array = [...noRepetidos]


//orden en español y en reverso de la Z a la A 
array.sort((a,b)=> b.localeCompare(a, "es"));
console.log(array);

//Lo mostramos por pantalla 

document.getElementById("encabezado").innerHTML= "Palabras inversas de la Z a la A";

let palabrerio= document.getElementById("palabreo");

palabrerio.textContent= array.join(", ");










