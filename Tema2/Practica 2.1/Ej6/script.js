/** E6. Diseña un programa con JavaScript que muestre mediante una ventana emergente.
 * La fecha de hoy con el formato de la imagen: */


let hoy = new Date();


let dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
             "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

let diaPalabra = dias[hoy.getDay()];      
let diaNumero = hoy.getDate();            
let mesPalabra = meses[hoy.getMonth()];   
let añoNumero = hoy.getFullYear();

alert("Hoy es " + diaPalabra + ", " + diaNumero + " de " + mesPalabra + " de " + añoNumero);
