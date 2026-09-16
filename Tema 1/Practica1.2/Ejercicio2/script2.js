/**Ejercicio 2. Escribe un programa en JavaScript que pida al usuario que introduzca una
cadena de texto. Mediante una ventana emergente, el programa mostrará cuántas letras
‘a’ hay en la cadena de texto introducida.  */

//Pedir que introduzca una cadena
var cadena = prompt("Introduce una cadena de texto");

//Contamos cuantas letras 'a' ha introducido el usuario
var letra = "a";
var mayusculas= 0;
var minusculas = 0;
var cantidad = cadena.split(letra).length - 1;

if (letra===letra.toUpperCase() || letra===letra.toLowerCase()) {
    mayusculas++;
    minusculas++;
}

var resultado = alert("La cadena tiene " + cantidad + " letras a.")