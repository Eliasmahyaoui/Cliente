/**E9. Diseña un programa con JavaScript que, mediante una expresión regular, valide el formato de
una fecha introducida en un campo de texto. El formato válido será DD/MM/YYYY, donde el día
y el mes podrán ser expresados con 1 ó 2 dígitos y el año, con 2 o 4 dígitos. El símbolo separador
deberá ser la barra. */




function comprobarFecha() {
    //cogemos lo que ha escrito el usuario
    let fecha = document.getElementById("fecha").value;

    //día: 1-9 (con 0 delante o no), 10-29 o 30-31
    //mes: 1-9 (con 0 delante o no) o 10-12
    //año: 2 o 4 dígitos
    let expresion = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(\d{2}|\d{4})$/;

    if (expresion.test(fecha)) {
        alert("Gracias por introducir la fecha.");
    } else {
        alert("El formato de fecha no es correcto.");
    }
}
