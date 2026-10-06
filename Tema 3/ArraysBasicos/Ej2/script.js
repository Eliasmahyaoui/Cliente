/**Ejercicio 2. Crea un array llamado “países” que contenga: "España", 
"Francia", "Alemania", "Italia". Recorre el array e imprime el nombre de cada 
país. Después, elimina el primer país del array y vuelve a recorrerlo e 
imprime el array de nuevo */


const paises=["España", "Francia","Alemania","Italia"];

for (const pais of paises) {
    console.log(pais);
}

//bORRAMOS el primer elemento del array con Shift
paises.shift();

console.log("---------------------");

//Lo volvemos a recorrer
for (const pais of paises) {
    console.log(pais);
}


