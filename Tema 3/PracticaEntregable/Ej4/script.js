/** 4. Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. Las combinaciones son 6
números del 1 al 49, pero debe tenerse en cuenta que no se pueden repetir los números en una
misma combinación.*/

//Repetimos 50 veces, una por cada combinación
for (let i = 1; i <= 50; i++) {

    //creamos un set para los no duplicados.
    const combinacion = new Set();

    //Mientras no tengamos 6 números seguimos sacando aleatorios del 1 al 49.
    //Si sale uno repetido, el set no lo añade y el tamaño no aumenta.
    while (combinacion.size < 6) {
        let random = Math.floor(Math.random() * 49) + 1;
        combinacion.add(random);
    }

    //Pasamos el set a array y lo ordenamos de menor a mayor
    const numeros = [...combinacion].sort((a, b) => a - b);

    //Imprimimos el resultado
    console.log("Combinación " + i + ": " + numeros.join(" - "));
}
