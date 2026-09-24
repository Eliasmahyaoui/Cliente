/**E3. Modifica el programa anterior para que, en lugar de mostrar la palabra “HOLA”, muestre la
palabra introducida por el usuario en un campo textual de formulario. La palabra en la tabla
deberá aparecer en mayúsculas, con independencia de cómo haya sido escrita la palabra en el
campo de texto. */

let texto = document.getElementById("texto");
let fila = document.getElementById("fila");

function repetir() {

    let palabra = texto.value;

    let mayusculas = palabra.toUpperCase();

    // Borro las celdas 
    fila.innerHTML = "";

    // Una vuelta por cada letra
    for (let i = 0; i < mayusculas.length; i++) {
        // creamos una celda nueva
        let celda = document.createElement("td");   
        // le ponemos su letra
        celda.textContent = mayusculas.charAt(i);    
         // la metemos en la fila
        fila.appendChild(celda);                    
    }
}
