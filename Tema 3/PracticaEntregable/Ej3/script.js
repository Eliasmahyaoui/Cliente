/**. Crea un Map que almacene nombres como claves y edades como valores. Luego, agrega algunos 
nombres y edades, actualiza la edad de uno de ellos, y finalmente imprime todos los nombres con sus 
edades */


//Creamos un map 

const nombres= new Map();
nombres.set("julian", 32);
nombres.set("Pepe", 28);
nombres.set("Rodolfo", 21);


//Añadimos dos nombres y edades más
nombres.set("Adrian", 31);
nombres.set("Ismael",33);


//Actualizamos la edad de los dos ultimos
nombres.set("Adrian",28);
nombres.set("Ismael",29);

//Imprimimos el resultado
console.log(nombres);






