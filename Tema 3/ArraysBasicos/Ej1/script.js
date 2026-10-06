/**Ejercicio 1. Crea un array llamado colores usando const y añade tres 
colores: "rojo", "verde", "azul". Luego, intenta modificar un color específico 
del array. Imprime el array completo antes y después del cambio. 
 */


const colores=['Rojo', 'Verde', 'Azul'];
console.log(colores);

//Shift borra el primer elemento del array
colores.shift('Rojo');  
//Unshift añade un elemento al principio del array 
colores.unshift('Magenta');
console.log(colores);

//pop borra el elemento final del array 
colores.pop('Azul'); 
console.log(colores);
//Push añade el elemento del array al final del array 
colores.push("Amarillo");
console.log(colores);

//accediendo al indice del array se puede cambiar el valor tambíen.
colores[1]= 'mOrado'; 
console.log(colores);


