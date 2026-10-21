/**Crea un bucle que recorra un array de números y calcule la suma de todos ellos 
de forma iterativa y recursiva. ¿Qué solución crees que es mejor?
 */


let numeros=[2,4,5,7,8,12,56,23,43];
//Bucle para arrays for of / for in

console.log(numeros);

var contador =0;
for (const numero of numeros) {
    contador += numero;    
}
console.log("La suma de todos los numeros es " + contador);


