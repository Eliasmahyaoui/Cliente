/**E8. Diseña un programa con JavaScript que permita seleccionar tu fecha de nacimiento, mediante
un campo de formulario tipo fecha. Una vez seleccionada la fecha en el calendario, el programa
informará de cuántos años tienes aproximadamente. */




function formulario() {
    //cogemos el valor del input, siempre llega como "YYYY-MM-DD"
    let valor = document.getElementById("fecha").value;

    //si no ha elegido fecha, el valor está vacío
    if (valor === "") {
        alert("Selecciona tu fecha de nacimiento.");
        return;
    }

    //separamos año, mes y día de la fecha de nacimiento
    let partes = valor.split("-");
    let anyo = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let dia = parseInt(partes[2]);

    //sacamos año, mes y día de hoy
    let fechaHoy = new Date();
    let anyoActual = fechaHoy.getFullYear();
    let mesActual = fechaHoy.getMonth() + 1; //getMonth va de 0 a 11
    let diaActual = fechaHoy.getDate();

    //si la fecha es futura no tiene sentido calcular la edad
    let fechaNacimiento = new Date(anyo, mes - 1, dia);
    if (fechaNacimiento > fechaHoy) {
        alert("Esa fecha todavía no ha llegado.");
        return;
    }

    let edad = anyoActual - anyo;

    //si este año todavía no ha sido su cumpleaños, restamos uno
    if (mes > mesActual || (mes === mesActual && dia > diaActual)) {
        edad--;
    }

    alert("Han transcurrido " + edad + " años, aproximadamente, desde que naciste.");
}
