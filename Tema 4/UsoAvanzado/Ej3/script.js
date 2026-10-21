/**Usa una combinación de los métodos map(), reduce() y filter() para procesar 
un array de objetos. Tienes un array de personas con sus nombres y edades,
filtra a las personas mayores de 18, multiplica su edad por 2, y luego suma 
todas las edades.

const personas = [ { nombre: "Juan", edad: 17 }, { nombre: "Ana", edad: 
22 }, { nombre: "Pedro", edad: 19 }, { nombre: "Laura", edad: 16 } ]; */



//Array de objetos

const personas = [{
    nombre: "Juan",
    edad: 17
}, {
    nombre: "Ana",
    edad: 22
}, {
    nombre: "Pedro",
    edad: 19
}, {
    nombre: "Laura",
    edad: 16
}];

//filtro a las personas mayores de 18 
//multiplico su edad * 2
//sumo todas las edades.


const filtrado = personas.filter(persona => persona.edad > 18);

const multiplica = filtrado.map(persona => persona.edad * 2); 

const sumar = multiplica.reduce((acumulado, edad) => acumulado + edad, 0);  



console.log("Las edades mayores de edad son : " , filtrado);
console.log("Las edades multiplicadas son : " , multiplica);
console.log("La suma de todas las edades son : " ,sumar);