/**Ejercicio 3. Crea un array llamado colores con los elementos "rojo", "verde", 
"azul", "amarillo", "naranja", "violeta". Crea un nuevo array con los colores 
entre las posiciones 1 y 4, los dos incluidos. Eliminar 2 colores a partir de 
la posición 3 en el array original e inserta los colores "negro" y "blanco" en 
esa posición. */

//Creamos el primer array 
const colores= ["rojo", "verde","azul","amaraillo", "naranja", "violeta"];

//mostrramos el primer array 
console.log(colores);


//Creamos el segundo array y cogemos las posiciones dichas por el enunciado;
const coloresNuevos= colores.slice(1,5);
//Imprimimos el resultado
console.log(coloresNuevos);

//Ahora eliminamos dos colores a partir de la posicion 3
colores.splice(3,2,"negro","blanco");

//Imprimimos el resultado final 
console.log(colores);








