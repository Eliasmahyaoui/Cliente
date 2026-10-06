/**Ejercicio 6. Dado el array “numeros = [4, 21, 33, 12, 9, 54]”, obtén un nuevo 
array que contenga solo los números pares. 
 */

let numeros = [4, 21, 33, 12, 9, 54];

//Con el metodo filter y una funcion sacamos los numeros pares.
let pares = numeros.filter(function(num){
    return num %2 == 0;
})

//Imprimo resultado
console.log(pares);

