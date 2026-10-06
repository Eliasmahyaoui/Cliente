/**Ejercicio 5. Crea una función llamada “contarOcurrencias” que reciba un 
array de palabras y devuelva un Map donde las claves sean las palabras y 
los valores sean el número de veces que aparecen en el array.*/


let palabras = ["sofa", "jardin", "mesa", "sofa", "barco", "mesa", "sofa"];

function contarOcurrencias(palabras) {
    let contador = new Map();

    for (let palabra of palabras) {
        if (contador.has(palabra)) {
            contador.set(palabra, contador.get(palabra) + 1);
        } else {
            contador.set(palabra, 1);
        }
    }

    return contador;
}

console.log(contarOcurrencias(palabras));
