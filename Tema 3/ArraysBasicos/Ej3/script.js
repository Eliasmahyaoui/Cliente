/**Ejercicio 3. Crea dos arrays: uno llamado “nombres” que contenga 5 
nombres de personas,

 y otro llamado “edades” que contenga las edades 
correspondientes a esos nombres (asegúrate de que la posición del 
nombre coincida con la posición de la edad). 

Recorre ambos arrays y 
genera un nuevo array llamado “mayoresDeEdad” que contenga los 
nombres de las personas que sean mayores o iguales a 18 años. 

Imprime el array “mayoresDeEdad” al final. */


//Array con 5 nombres
const nombres = ["Ernesto", "Ricardo", "Martin", "Jandro", "Raul"];

//Array de las edades correspondiendo las edades a la posicion de cada uno.
const edades = [17, 51, 12, 35, 29];

//El for of muestra el nombre de la posicion del array 
for (const nombre of nombres) {

    console.log(nombre);
}

//El for of muestra el numero de la posicion del array 
for (const e of edades) {
    console.log(e);

}

//Mayores de edad array vacio al principio
const mayoresDeEdad = [];
 


//e es la posicion, y sirve para los dos arrays a la vez
for (const e in edades) {
    if (edades[e] >= 18) {
        console.log("Los mayores de edad son: ");
        mayoresDeEdad.push(nombres[e]); //Guardamos el nombre de esa misma posicion
    }
}

console.log(mayoresDeEdad);