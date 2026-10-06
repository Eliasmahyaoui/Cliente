/**Ejercicio 2. Crea un array llamado valores que contenga números, algunos 
de los cuales son duplicados. Utiliza un Set para crear un nuevo array que 
contenga solo los números únicos y luego imprímelo. */

let valores=[2,2,2,4,6,8,9,12,34,12,45,65,4];


//Creamos un set y le metemos el array de valores dentro 
let nuevos= new Set(valores);

//Imprimimos el set, no debe de a ver repetidos.
console.log(nuevos);



