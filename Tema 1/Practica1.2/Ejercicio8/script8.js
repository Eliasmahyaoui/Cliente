/**Ejercicio 8. Diseña un programa en JavaScript que permita al usuario introducir tres
valores numéricos en un pequeño formulario. Al enviar el formulario, el programa
informará, mediante ventana emergente, de cuál de los tres números introducidos es el
mayor.
Nota: el programa nunca seleccionará el número mayor si alguno de los campos está en
blanco o el valor que contiene no es numérico. */


function enviar() {
    let numero1 = document.getElementById("valor1").value;
    let numero2 = document.getElementById("valor2").value;
    let numero3 = document.getElementById("valor3").value;


    if (numero1 === "" || numero2 === "" || numero3 === "") {
        alert("rellena todos los campos");
    } else {
        let mayor = Math.max(numero1, numero2, numero3);
        alert("El mayo es: " + mayor);
    }

    return false;
}