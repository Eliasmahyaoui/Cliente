/** Ejercicio 3. Crea un Set con algunos nombres. Luego, agrega un nuevo 
nombre, verifica si un nombre específico está en el set, y elimina un 
nombre. Imprime el contenido del Set al final. */


const  nombres= new Set(["alberto", "Fede", "Juanma", "Ricardo"]);

//añadimos un nombre
nombres.add("Musa");
//Comprobamos si ese nombre esta en el set
nombres.has("Ricardo");
//Eliminamos un nombre
nombres.delete("Fede");


//Imprimo el resultado.
console.log(nombres);








