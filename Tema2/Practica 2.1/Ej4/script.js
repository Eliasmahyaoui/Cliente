/**E4. Diseña con JavaScript un conversor de números. El usuario introducirá un número decimal
en un campo de texto y, al pulsar el botón, el programa realizará la conversión a las tres bases
alternativas: binario, octal y hexadecimal. */

let numero = document.getElementById("numero");
let binario = document.getElementById("binario");
let octal = document.getElementById("octal");
let hexadecimal = document.getElementById("hexadecimal");

function convertir() {

    // Paso el texto a número entero
    let n = parseInt(numero.value);

    // Si no es un número, aviso y salgo
    if (isNaN(n)) {
        alert("Introduce un número decimal válido");
        return;
    }

    // toString(base) convierte el número a la base que le digamos
    binario.textContent = n.toString(2);
    octal.textContent = n.toString(8);
    hexadecimal.textContent = n.toString(16);
}
