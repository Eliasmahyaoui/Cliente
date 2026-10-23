/**Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup
se deje vacío o se cancele.
Crear una función que recibirá todas las palabras y devolverá un mapa que contenga
como clave cada palabra y cuyo valor será el número de veces que aparece esa palabra
en el array. Mostrar los resultados por pantalla.
 */

let palabras = [];

let usuario = prompt("Dame palabras:");

while (usuario != null && usuario != "") {
    palabras.push(usuario);
    usuario = prompt("Dime palabras");
}


//Creamos una funcion
function palabreria(palabras) {

    const mapa = new Map();
    palabras.forEach(palabra => {
        if (mapa.has(palabra)) {
            mapa.set(palabra, mapa.get(palabra) + 1);
        } else {
            mapa.set(palabra, 1);
        }
    });

    return mapa;

}

const resultado = palabreria(palabras);

//Mostramos los resultados por pantalla
resultado.forEach((veces, palabra) => {
    document.write(palabra + ": " + veces + "<br>");
});
