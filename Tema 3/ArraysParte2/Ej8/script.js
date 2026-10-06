/**Ejercicio 8. Crea el siguiente array: 
let data = [ 
{name: "Nacho", telephone: "966112233", age: 40}, 
{name: "Ana", telephone: "911223344", age: 35}, 
{name: "Mario", phone: "611998877", age: 15}, 
{name: "Laura", telephone: "633663366", age: 17} 
]; 

a) Añade dos elementos al final: 
{name: "Pedro", telephone: "611944444", age: 25}, 
{name: "Julia", phone: "633232323", age: 37} 

b) Comprueba con console.log (data) que se han añadido. 
c) Ordena el vector por edad, comprueba el resultado. 
d) Ordena el vector por nombre (utiliza .localcompare: 
https://www.w3schools.com/jsref/jsref_localecompare.asp), 
comprueba el resultado. 
e) Crea y muestra un nuevo vector que contenga solo los mayores de 30 
años. */

let  data = [ 
{name: "Nacho", telephone: "966112233", age: 40}, 
{name: "Ana", telephone: "911223344", age: 35}, 
{name: "Mario", phone: "611998877", age: 15}, 
{name: "Laura", telephone: "633663366", age: 17} 
]; 

//Añadimos dos elementos al final
data.push({name: "Pedro", telephone: "611944444", age: 25}, 
{name: "Julia", phone: "633232323", age: 37} );

//Mostramos el resultado
console.log(data);




//Ordenamos el vector por edad
data.sort((a, b) => a.age - b.age);
console.log(data);

//Ordenamos el vector por nombre
data.sort((a, b) => a.name.localeCompare(b.name));

//creamos un array nuevo para los mayoresd 30

let mayores30= data.filter(persona=>persona.age >30);
console.log(mayores30);

