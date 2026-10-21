/**Crea una función flecha que sirva para devolver verdadero si un número es 
par o falso si no lo es. Asigna esa función a una variable y prueba la función 
para ver que responde correctamente. */


const pares= (array) =>{
    let nPares= 0;
    if (array instanceof Array)
        for (n of array){
            if(n%2===0){
                nPares++;
            }
        }return nPares;
}

