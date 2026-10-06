/**Ejercicio 5. Dado el array “edades = [25, 30, 18, 40, 25, 30]”, encuentra la 
posición de la primera aparición del número 30 y la posición de la última 
aparición del número 25.  */

const edades = [25, 30, 18, 40, 25, 30];

//encontramos la primera ocurrencia  del numero 30.

console.log("La primera ocurrencia del numero 30 esta en la posicion: " +edades.indexOf(30));

//Encontramos la ultima ocurrencia del numero 25
console.log("La ultima ocurrencia del numero 25 esta en la posicion : " + edades.lastIndexOf(25));



