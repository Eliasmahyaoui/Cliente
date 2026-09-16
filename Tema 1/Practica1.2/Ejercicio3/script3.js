/**Ejercicio 3. Modifica el programa del ejercicio 2 para que cuente tanto las ‘a’ minúsculas
como las mayúsculas.  */

//Pedir que introduzca una cadena
var cadena = prompt("Introduce una cadena de texto");

//Contamos cuantas letras 'a' ha introducido el usuario
// Pedir que introduzca una cadena
var cadena = prompt("Introduce una cadena de texto");

// Convertir toda la cadena a minúsculas y contar las "a"
var cantidad = cadena.toLowerCase().split("a").length - 1;

// Mostrar el resultado
alert("La cadena tiene un total de " + cantidad + " letras 'a'");