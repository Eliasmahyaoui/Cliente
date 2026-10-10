/**2. Crea un array llamado valores que contenga números, algunos de los cuales son duplicados. Utiliza 
un Set para crear un nuevo array que contenga solo los números únicos y luego impímelo */


//Creamos el array valores 
let valores=[3,6,9,5,2,6,3,24,37];
console.log(valores);


let valoresUnicos= new Set(valores);
console.log(valoresUnicos);

