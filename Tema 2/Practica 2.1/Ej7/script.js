/**7. Diseña un programa con JavaScript que pregunte al usuario su fecha de nacimiento (en 
formato YYYY/MM/DD) y calcule cuántos días han transcurrido desde su nacimiento hasta la 
actualidad.  */


let fechaHoy= new Date();  
let texto= prompt("¿Que dia naciste? YYY/MM/DD :");
let partes = texto.split("/");
let anyo= parseInt(partes[0]);
let mes= parseInt(partes[1]);
let dia= parseInt(partes[2]);

let fechaNacimiento= new Date(anyo,mes -1 ,dia);
let diferenciaMs = fechaHoy - fechaNacimiento;
let dias = Math.floor(diferenciaMs /(1000 * 60 * 60 * 24));

alert("Han transcurrido " + dias + " dias, aproximadamente, desde que naciste.");


