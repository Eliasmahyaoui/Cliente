/**Ejercicio 4. Crea un Map que almacene nombres como claves y edades 
como valores. Luego, agrega algunos nombres y edades, actualiza la edad 
de uno de ellos, y finalmente imprime todos los nombres con sus edades..*/


//Creamos un map
const nombres= new Map();

//Los valores del map se añaden con set 
nombres.set("Jorge", 23);
nombres.set("Luca", 29);
nombres.set("Sergio", 54);
nombres.set("Naim", 33);

//Actualizo, es igual que añadir 
nombres.set("Jorge", 44);

//Imprimimos resultado
console.log(nombres);

