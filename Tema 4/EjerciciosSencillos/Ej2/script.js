/** Crea una función anónima autoinvocada que defina una variable llamada 
contador y la incremente en cada invocación. Luego, intenta acceder a la 
variable contador fuera de la función y observa lo que sucede.*/


//funcion autoinvocada
(function () {
    let contador = 0 ;
    contador++;
    console.log("Dentro de la funcion: " , contador);
}())


//sale un error de que no esta la variable contador no esta definida.
console.log(contador);

